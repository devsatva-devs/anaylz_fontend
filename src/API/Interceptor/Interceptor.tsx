import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "../client";
import { useNavigate } from "react-router-dom";
import { store } from "../../store";
import closeIcon from "../../../public/images/close_1_.svg";

let requestInterceptorRef: any;
let responseInterceptorRef: any;

const hideToast = ["leaderboards"];

const Interceptor = () => {
  const { api } = client;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // fetching Access token from local storage to check authentication
    const state = store.getState();
    const authenticationState = state?.authentication;
    const AUTH_TOKEN = authenticationState?.access_token;
    api.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
    api.interceptors.request.eject(requestInterceptorRef);
    requestInterceptorRef = api.interceptors.request.use(
      (config) => {
        setIsLoading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    api.interceptors.request.eject(responseInterceptorRef);
    responseInterceptorRef = api.interceptors.response.use(
      (response) => {
        // setting timeout for showing loader for at least 1 sec
        if (
          response.config.method !== "get" &&
          hideToast.indexOf(response?.config.url || "") === -1
        ) {
          // toast.success(response.data.message);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return response;
      },
      (error) => {
        // using setTimeOut to show the loader for at least 1 sec
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        if (error.response) {
          if (hideToast.indexOf(error.response?.config.url || "") === -1) {
            toast.error(
              (error.response.data?.data?.length === 1 &&
                error.response.data?.data[0]) ||
                error.response.data.message ||
                "Something went wrong",
              {
                icon: closeIcon,
              }
            );
          }
          toast.clearWaitingQueue({ containerId: "main-toast" });

          let configUrl = error?.response?.config?.url;
          if (
            error.response.status === 401 &&
            !configUrl.includes("eligibility")
          ) {
            console.log("error", error);
            // redirecting to login for unauthorized user
            // onLogout();
            // navigate("/");
          }
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return (
    <>
      <div className="loaderCss">
        {/* Common loader for all API requests */}
        {isLoading && (
          <section className="loader-wrapper">
            <img src="../images/loader.svg" />
          </section>
        )}
      </div>
    </>
  );
};

export default Interceptor;
