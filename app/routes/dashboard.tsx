import { Outlet } from "@remix-run/react";
import React from "react";
import DashboardLayout from "~/components/DashboardLayout";

const DashboardLayoutRoute = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default DashboardLayoutRoute;
