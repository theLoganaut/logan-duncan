import {
  Authenticator,
  View,
  Image,
  Text,
  Heading,
  Button,
  useTheme,
} from "@aws-amplify/ui-react";

export const authComponents = {
  // Header() {
  //   const { tokens } = useTheme();

  //   return (
  //     <View textAlign="center" padding={tokens.space.large}>
  //       <Image
  //         alt="Amplify logo"
  //         src="https://docs.amplify.aws/assets/logo-dark.svg"
  //       />
  //     </View>
  //   );
  // },

  // Footer() {
  //   const { tokens } = useTheme();

  //   return (
  //     <View textAlign="center" padding={tokens.space.large}>
  //       <Text color={tokens.colors.neutral[80]}>
  //         &copy; All Rights Reserved
  //       </Text>
  //     </View>
  //   );
  // },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <div>
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Push That Mountain!
          </Heading>
          <Text padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Click sign in to go there. The text is normal there, dont worry.
          </Text>
        </div>
      );
    },
    Footer() {
      // const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            // onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      // const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            // onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

export const authFormFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: true,
      label: "Confirm Password:",
      order: 3,
    },
    username: {
      labelHidden: false,
      placeholder: "Enter your email",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  // setupTOTP: {
  //   QR: {
  //     totpIssuer: "test issuer",
  //     totpUsername: "amplify_qr_test_user",
  //   },
  //   confirmation_code: {
  //     labelHidden: false,
  //     label: "New Label",
  //     placeholder: "Enter your Confirmation Code:",
  //     isRequired: false,
  //   },
  // },
  // confirmSignIn: {
  //   confirmation_code: {
  //     labelHidden: false,
  //     label: "New Label",
  //     placeholder: "Enter your Confirmation Code:",
  //     isRequired: false,
  //   },
  // },
};
