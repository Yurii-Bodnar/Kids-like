import { useFormik } from "formik";
import { useEffect } from "react";
import {
  Btn,
  BtnContainer,
  Container,
  Form,
  Input,
  Label,
  Span,
  Title,
} from "./AuthForm.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registerUser } from "../../redux/auth/authOperation";
import { toast } from "react-toastify";
import {
  selectErrorMessage,
  selectSuccessMessage,
} from "../../redux/auth/authSelectors";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorMessage = useAppSelector(selectErrorMessage);
  const successMessage = useAppSelector(selectSuccessMessage);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage, errorMessage]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: validateForLogin,
    onSubmit: (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(registerUser(user));
      navigate("/");
    },
  });
  return (
    <Container>
      <Title>Complete tasks, get cool prizes!</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <Span>*Email:</Span>
          <Input
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            placeholder="your@email.com"
          />
        </Label>
        <Label>
          <Span>*Password:</Span>
          <Input
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            placeholder="Password"
          />
        </Label>
        <BtnContainer>
          <Btn type="submit">Sign in</Btn>
          <Btn type="submit">Register</Btn>
        </BtnContainer>
      </Form>
    </Container>
  );
};

export default AuthForm;
