import { X } from "lucide-react";

const CardPoPUp = ({ item, setcardPopUp }) => {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 fixed z-[10] top-0 left-0 flex justify-center items-center ">
      <div className="bg-blue-100 min-h-screen flex justify-center items-center relative">
        <button
          onClick={() => setcardPopUp(null)}
          className=" absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
        <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-green-100 p-6 border-r">
              <h2 className="text-lg font-bold mb-4">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-6">
                FIRST runs a blog open to members and invited guest authors. It
                publishes contributions relevant to incident responders.
                Articles should focus on general topics interesting to members.
                It will not be used to promote individual organisations,
                products, or services.
              </p>
              <p className="text-sm text-gray-700">
                Learn more about the Forum of Incident Response and Security
                Teams through regular blog posts about our organization, events,
                and other programs. Questions or comments? Contact
                <a
                  href="mailto:first-blog@first.org"
                  className="text-blue-500 underline ml-1"
                >
                  first-blog@first.org
                </a>
              </p>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-6">
              <h1 className="text-2xl font-bold text-green-900 mb-4">
                Thank You FIRST Community for Helping Team Cymru Reach a New
                CSIRT Assistance Program Milestone
              </h1>
              <h2 className="text-sm text-gray-600 mb-6">
                Together, We’re Creating Better Threat Intelligence Sharing for
                the World
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                <strong>
                  by Jacomo Piccolini, Outreach Team Lead, Team Cymru
                </strong>
                <br />
                Monday, January 28th, 2020
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Since 2005, Team Cymru’s mission has been to save and improve
                lives by working with public and private sector entities to
                discover, track, and take down threat actors and criminals
                worldwide. We do this by delivering comprehensive visibility
                into global cyber threat activity. For over 15 years, we’ve
                built data sharing partnerships on a global scale that allows us
                to collect, process and aggregate global network traffic and 50+
                other types of data to give our clients Pure SignalTM. This
                allows elite analyst teams to perform threat hunting and cyber
                reconnaissance at a level not possible using traditional methods
                and tools.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                However, while our Pure Signal intelligence is available
                commercially and also powers many cyber security vendors’
                offerings, Team Cymru prioritizes its no-cost community
                services. For example, we have recently released the new Nimbus
                Threat Monitor, which leverages our leading IP reputation data
                to deliver no-cost threat intelligence monitoring to network
                operators and network owners around the world. We also provide a
                no-cost DDoS solution, a CSIRT Assistance Program (CAP) and
                more.
              </p>
              <p className="text-sm text-gray-700">
                During our time at the FIRST Conference, we reached a new
                milestone with our CSIRT Assistance program, adding new CSIRT
                members and a total of 133 participating teams. Established
                nearly a decade ago as a trusted conduit for notifying countries
                of observed malicious Internet activity, the Team Cymru CAP
                works with national and regional CSIRTs (Computer Security
                Incident Response Teams) by sharing its world-class threat
                intelligence at no cost. Today the CAP has scaled to provide up
                to 20 million events to global CSIRTs every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPoPUp;
