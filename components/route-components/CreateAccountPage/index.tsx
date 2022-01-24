import dynamic from 'next/dynamic';

const CreateAccountSection = dynamic(
  () => {
    return import('../../generic-page-components/CreateAccount/Main');
  },
  { ssr: false }
);

function CreateAccountPage() {
    return (
      <div>
        <CreateAccountSection />
      </div>
    )
  }
  
export default CreateAccountPage