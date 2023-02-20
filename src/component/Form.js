import React from "react";
import { Tabs } from "antd";
import "./Form.css";
import ViewTab from "./formTabs/ViewTab";
import EditTab from "./formTabs/EditTab";
import DeleteTab from "./formTabs/DeleteTab";
import DevelTab from "./formTabs/DevelTab";

function Form() {
  return (
    <div className="form">
      <h1>Edit Balance of Payments</h1>
      <Tabs defaultActiveKey="tab1" type="card">
        <Tabs.TabPane tab="View" key="tab1">
          <ViewTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Edit" key="tab2">
          <EditTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Delete" key="tab3">
          <DeleteTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Devel" key="tab4">
          <DevelTab />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Form;
