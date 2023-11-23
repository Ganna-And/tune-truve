"use client";

import Button from "@/components/Button";
import { postData } from "@/helpers/getUrl";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type AccountContentProps = {};

const AccountContent: React.FC<AccountContentProps> = () => {
  const { user, isLoading, subscription } = useUser();
  const router = useRouter();
  const subscribeModale = useSubscribeModal();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user && !isLoading) {
      router.replace("/");
    }
  }, [router, user, isLoading]);

  const redirectToCustomerPortal = async () => {
    setLoading(true)
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
       return window.location.assign(url);
     
    } catch (error) {
    if(error)  return alert((error as Error).message)
    }
setLoading(false)
  };

  return (
    <div className="mt-4 ml-4 flex flex-col justify-center items-center">
      {!subscription ? (
        <div>
          <div>You dont have plan at the moment</div>
          <Button className="mt-4 bg-orange-500 navhover " onClick={subscribeModale.onOpen}>Subscribe now</Button>
        </div>
      ) : (
        <div>
          <h1>
            You are currently on 
             <b>{subscription?.prices?.products?.name}</b> plan.
          </h1>
          <Button 
          disabled={loading || isLoading}
          className="mt-4 bg-orange-500 navhover "
          onClick={redirectToCustomerPortal}>Customer Portal</Button>
        </div>
      )}
    </div>
  );
};
export default AccountContent;
