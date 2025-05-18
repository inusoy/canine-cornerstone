import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";

const TreningiMiejskie = () => {
  return (
    <>
    <Helmet>
      <title>Treningi Miejskie dla psów | Szczek Szczek Wrocław</title>
      <meta
        name="description"
        content=""
      />
      <link rel="canonical" href="/training/treningi-miejskie" />
      <meta property="og:title" content="Treningi Miejskie dla psów | Szczek Szczek Wrocław" />
      <meta
        property="og:description"
        content=""
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/training/treningi-miejskie" />
    </Helmet>
      <TrainingLayout
        title="Treningi Miejskie"
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Zajęcia grupowe</b></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span> <b>Lokalizacja:</b><ul>Umówione wcześniej miejsce.</ul>
                </span>
              </li>
              <SignupInfo showContactForm={false} price="70 zł" />
            </ul>
          </div>
        }
      >
        <p>
          
        </p>
      </TrainingLayout>
    </>
  );
};

export default TreningiMiejskie;
