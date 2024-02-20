import React from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangeInformationForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateInformation } from "../../../Auth/userSlice";

ChangeInformation.propTypes = {};

function ChangeInformation({userInfor}) {
  const dispatch = useDispatch()
  const handleSubmit = async (data) => {
    try {
      dispatch(updateInformation({
        newInformation: data
      }))
      toast.success("Update password successfully <3");
      console.log(data);
    } catch (error) {}
  };
  return <ChangePasswordForm onSubmit={handleSubmit} userInfor={userInfor} />;
}

export default ChangeInformation;
