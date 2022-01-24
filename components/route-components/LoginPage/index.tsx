import dynamic from 'next/dynamic';

const LoginSection = dynamic(
  () => {
    return import('../../generic-page-components/Login/Main');
  },
  { ssr: false }
);

function LoginPage() {
    return (
      <div>
        <LoginSection />
      </div>
    )
  }
  
export default LoginPage