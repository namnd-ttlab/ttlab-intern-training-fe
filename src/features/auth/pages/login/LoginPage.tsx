import { PageRouter } from "@common/constants";
import { InputPasswordField, InputTextField } from "@components/index";
import { loginResolver } from "@features/auth/shema";
import { useForm } from "@plugins/hook-form";
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

export function LoginPage() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    resolver: loginResolver,
  });

  const login = () => {
    handleSubmit((formData) => {
      console.log(formData);
      navigate(PageRouter.PRODUCT);
    })();
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <Form layout="vertical" className="login-form">
        <InputTextField
          name="email"
          label="Email"
          placeholder="Enter your email"
          control={control}
        />
        <InputPasswordField
          name="password"
          label="Password"
          placeholder="Enter your password"
          control={control}
        />
        <Button type="primary" onClick={login} block>
          Login
        </Button>
      </Form>
    </div>
  );
}
