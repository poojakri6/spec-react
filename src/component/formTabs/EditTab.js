import React, { useState } from "react";
import "../Form.css";
import { Button, Checkbox, Form, Input, Select } from "antd";

function EditTab() {
  const [title, setTitle] = useState("");
  const [visuals, setVisuals] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      Title: title,
      URL: url,
      Visual: visuals,
    };
    console.log(payload);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          rules={[
            {
              required: true,
              message: "Please enter title",
            },
          ]}
        >
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="API URL"
          rules={[
            {
              required: true,
              message: "enter URL",
            },
          ]}
        >
          <Input value={url} onChange={(e) => setUrl(e.target.value)} />
        </Form.Item>
        <Form.Item label="Type of Visualisation">
          <Select
            defaultValue="chart"
            value={visuals}
            onSelect={(e) => setVisuals(e)}
            options={[
              { label: "Chart", value: "chart" },
              { label: "Table", value: "table" },
              { label: "Card", value: "card" },
            ]}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditTab;
