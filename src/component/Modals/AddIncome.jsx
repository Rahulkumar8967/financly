// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, DatePicker, Select, Button } from "antd";

function AddIncomeModal({ isIncomeModalVisible, handleIncomeCancel, onFinish }) {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add Income"
      open={isIncomeModalVisible} // Updated from `visible` to `open` for Ant Design v5+
      onCancel={handleIncomeCancel}
      footer={null}
      className="font-semibold"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "income");
          form.resetFields();
        }}
        className="space-y-4"
      >
        {/* Name Input */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Name</span>}
          name="name"
          rules={[{ required: true, message: "Please input the name of the transaction!" }]}
        >
          <Input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Amount Input */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Amount</span>}
          name="amount"
          rules={[{ required: true, message: "Please input the income amount!" }]}
        >
          <Input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Date Picker */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Date</span>}
          name="date"
          rules={[{ required: true, message: "Please select the income date!" }]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Tag Selection */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Tag</span>}
          name="tag"
          rules={[{ required: true, message: "Please select a tag!" }]}
        >
          <Select
            className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Select a tag"
          >
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="freelance">Freelance</Select.Option>
            <Select.Option value="investment">Investment</Select.Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Add Income
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
AddIncomeModal.propTypes = {
  isIncomeModalVisible: PropTypes.bool.isRequired,
  handleIncomeCancel: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default AddIncomeModal;

