import Image from "next/image";

const cameras = [
  { name: "Lytx", logo: "/images/eld/lytx.png" },
  { name: "Motive", logo: "/images/eld/motive.png" },
  { name: "Netradyne", logo: "/images/eld/netradyne.png" },
  { name: "Samsara", logo: "/images/eld/samsara.png" },
  { name: "Surfsight", logo: "/images/eld/surfsight.png" },
  { name: "Driver Technologies", logo: "/images/eld/driver-technologies.png" },
  { name: "FleetHunt", logo: "/images/eld/fleethunt.png" },
  { name: "SmartDrive", logo: "/images/eld/smartdrive.jpeg" },
  { name: "Verizon Connect", logo: "/images/eld/verizon-connect.png" },
  { name: "IntelliShift", logo: "/images/eld/intellishift.png" },
  { name: "Eye Ride", logo: "/images/eld/eye-ride.png" },
  { name: "Lightmetrics", logo: "/images/eld/lightmetrics.jpeg" },
  { name: "Raven", logo: "/images/eld/raven.png" },
  { name: "Azuga", logo: "/images/eld/azuga.png" },
  { name: "Forward Thinking Systems", logo: "/images/eld/forward-thinking-systems.svg" },
  { name: "GPS Web Pro", logo: "/images/eld/gps-web-pro.png" },
  { name: "TXT Camera", logo: "/images/eld/txt-camera.jpg" },
  { name: "RoadEazy", logo: "/images/eld/roadeazy.jpeg" },
];

const elds = [
  { name: "888 ELD", logo: "/images/eld/888-eld.png" },
  { name: "ABC", logo: "/images/eld/abc.png" },
  { name: "Action ELD", logo: "/images/eld/action-eld.jpeg" },
  { name: "AFSWorld", logo: "/images/eld/afsworld.svg" },
  { name: "Affordable GPS Tracking", logo: "/images/eld/affordable-gps-tracking.png" },
  { name: "Air ELD", logo: "/images/eld/air-eld.png" },
  { name: "AMPM ELD", logo: "/images/eld/ampm-eld.jpeg" },
  { name: "Apollo ELD", logo: "/images/eld/apollo-eld.png" },
  { name: "AT&T Fleet Management", logo: "/images/eld/at-amp-t-fleet-management.png" },
  { name: "Azuga", logo: "/images/eld/azuga.png" },
  { name: "BigRoad", logo: "/images/eld/bigroad.png" },
  { name: "Black Bear ELD", logo: "/images/eld/black-bear-eld.jpeg" },
  { name: "Blue Sun ELD", logo: "/images/eld/blue-sun-eld.png" },
  { name: "BlueInk", logo: "/images/eld/blueink.png" },
  { name: "Captain ELD", logo: "/images/eld/captain-eld.png" },
  { name: "Chronos ELD", logo: "/images/eld/chronos-eld.png" },
  { name: "Clearpath GPS", logo: "/images/eld/clearpath-gps.png" },
  { name: "Columbus ELD", logo: "/images/eld/columbus-eld.png" },
  { name: "Daily ELD Plus", logo: "/images/eld/daily-eld-plus.jpg" },
  { name: "DLOG ELD", logo: "/images/eld/dlog-eld.png" },
  { name: "Digital ELD", logo: "/images/eld/digital-eld.jpeg" },
  { name: "DriverTech", logo: "/images/eld/drivertech.png" },
  { name: "DSGELOGS", logo: "/images/eld/dsgelogs.png" },
  { name: "Dy+ ELD", logo: "/images/eld/dy-eld.jpg" },
  { name: "Eco Track", logo: "/images/eld/eco-track.jpg" },
  { name: "EGreen ELD", logo: "/images/eld/egreen-eld.svg" },
  { name: "ELDDesired", logo: "/images/eld/elddesired.png" },
  { name: "ELDMandateHOS", logo: "/images/eld/eldmandatehos.png" },
  { name: "ELDTREX", logo: "/images/eld/eldtrex.png" },
  { name: "EliteGPS", logo: "/images/eld/elitegps.png" },
  { name: "EROAD", logo: "/images/eld/eroad.png" },
  { name: "Eva ELD", logo: "/images/eld/eva-eld.png" },
  { name: "Factor ELD", logo: "/images/eld/factor-eld.png" },
  { name: "FleetComplete", logo: "/images/eld/fleetcomplete.png" },
  { name: "FordPro", logo: "/images/eld/fordpro.png" },
  { name: "Forward Thinking Systems Intellihub", logo: "/images/eld/forward-thinking-systems-intellihub.svg" },
  { name: "Fuel Express", logo: "/images/eld/fuel-express.jpg" },
  { name: "GeoTab", logo: "/images/eld/geotab.png" },
  { name: "GeoTab ATT", logo: "/images/eld/geotab-att.png" },
  { name: "GPSTab", logo: "/images/eld/gpstab.png" },
  { name: "GPSTrackit", logo: "/images/eld/gpstrackit.png" },
  { name: "GPS INSIGHT", logo: "/images/eld/gps-insight.webp" },
  { name: "Hero ELD", logo: "/images/eld/hero-eld.png" },
  { name: "HOS247", logo: "/images/eld/hos247.png" },
  { name: "iLog ELD", logo: "/images/eld/ilog-eld.svg" },
  { name: "Intellishift", logo: "/images/eld/intellishift.jpg" },
  { name: "ISAAC", logo: "/images/eld/isaac.png" },
  { name: "Just ELD", logo: "/images/eld/just-eld.png" },
  { name: "J. J. Keller", logo: "/images/eld/j-j-keller.png" },
  { name: "Knight ELD", logo: "/images/eld/knight-eld.png" },
  { name: "Lancer Auto Group", logo: "/images/eld/lancer-auto-group.jpg" },
  { name: "LBTechnology", logo: "/images/eld/lbtechnology.png" },
  { name: "Leader ELD", logo: "/images/eld/leader-eld.svg" },
  { name: "Legacy ELD", logo: "/images/eld/legacy-eld.avif" },
  { name: "Light & Travel ELD", logo: "/images/eld/light-amp-travel-eld.png" },
  { name: "Linxup", logo: "/images/eld/linxup.png" },
  { name: "Lioneight", logo: "/images/eld/lioneight.png" },
  { name: "Live View GPS", logo: "/images/eld/live-view-gps.jpg" },
  { name: "Loop ELD", logo: "/images/eld/loop-eld.svg" },
  { name: "Lucid ELD", logo: "/images/eld/lucid-eld.png" },
  { name: "Maestral ELD", logo: "/images/eld/maestral-eld.png" },
  { name: "Max ELD", logo: "/images/eld/max-eld.png" },
  { name: "Mobile Tracking", logo: "/images/eld/mobile-tracking.png" },
  { name: "Moonlight ELD", logo: "/images/eld/moonlight-eld.png" },
  { name: "Monarch Tracking", logo: "/images/eld/monarch-tracking.png" },
  { name: "Motive", logo: "/images/eld/motive.png" },
  { name: "My Logs", logo: "/images/eld/my-logs.jpg" },
  { name: "Nero", logo: "/images/eld/nero.png" },
  { name: "Next Fleet ELD", logo: "/images/eld/next-fleet-eld.jpeg" },
  { name: "Nuvo Solutions", logo: "/images/eld/nuvo-solutions.png" },
  { name: "Omnitracs ES", logo: "/images/eld/omnitracs-es.png" },
  { name: "OmnitracsXRS", logo: "/images/eld/omnitracsxrs.png" },
  { name: "OneStepGPS", logo: "/images/eld/onestepgps.png" },
  { name: "Onroad ELD", logo: "/images/eld/onroad-eld.png" },
  { name: "Optima ELD", logo: "/images/eld/optima-eld.png" },
  { name: "Orbcomm", logo: "/images/eld/orbcomm.png" },
  { name: "Panda ELD", logo: "/images/eld/panda-eld.png" },
  { name: "Patriot ELD", logo: "/images/eld/patriot-eld.png" },
  { name: "Peak ELD", logo: "/images/eld/peak-eld.png" },
  { name: "Pedigree", logo: "/images/eld/pedigree.png" },
  { name: "PeopleNet", logo: "/images/eld/peoplenet.png" },
  { name: "Phoenix ELD", logo: "/images/eld/phoenix-eld.png" },
  { name: "Pop ELD", logo: "/images/eld/pop-eld.jpeg" },
  { name: "Prestige ELD", logo: "/images/eld/prestige-eld.svg" },
  { name: "Pro ride ELD", logo: "/images/eld/pro-ride-eld.png" },
  { name: "Prologs", logo: "/images/eld/prologs.png" },
  { name: "Quality Logs ELD", logo: "/images/eld/quality-logs-eld.png" },
  { name: "Responsible Fleet GPS", logo: "/images/eld/responsible-fleet-gps.png" },
  { name: "Robinhood ELD", logo: "/images/eld/robinhood-eld.png" },
  { name: "Rock ELD", logo: "/images/eld/rock-eld.png" },
  { name: "Routemate ELD", logo: "/images/eld/routemate-eld.png" },
  { name: "Spireon", logo: "/images/eld/spireon.png" },
  { name: "Secure Path ELD", logo: "/images/eld/secure-path-eld.png" },
  { name: "Sharp ELD", logo: "/images/eld/sharp-eld.png" },
  { name: "Simplex", logo: "/images/eld/simplex.webp" },
  { name: "Sparkle ELD", logo: "/images/eld/sparkle-eld.svg" },
  { name: "S13 ELD", logo: "/images/eld/s13-eld.png" },
  { name: "Samsara", logo: "/images/eld/samsara.png" },
  { name: "Smart ELDs", logo: "/images/eld/smart-elds.png" },
  { name: "STATE ELOGS", logo: "/images/eld/state-elogs.png" },
  { name: "Startrucks ELD", logo: "/images/eld/startrucks-eld.png" },
  { name: "SUPPORT ELD", logo: "/images/eld/support-eld.png" },
  { name: "Swift ELD", logo: "/images/eld/swift-eld.png" },
  { name: "Teletrac Navman", logo: "/images/eld/teletrac-navman.png" },
  { name: "3MD ELD", logo: "/images/eld/3md-eld.png" },
  { name: "Touch Tel GPS", logo: "/images/eld/touch-tel-gps.png" },
  { name: "TOP COMPLIANCE ELD", logo: "/images/eld/top-compliance-eld.png" },
  { name: "TrackEnsure", logo: "/images/eld/trackensure.png" },
  { name: "Transcor Data Services", logo: "/images/eld/transcor-data-services.webp" },
  { name: "Transflo", logo: "/images/eld/transflo.png" },
  { name: "Transit ELD", logo: "/images/eld/transit-eld.svg" },
  { name: "TruckX", logo: "/images/eld/truckx.png" },
  { name: "TRUST ELD", logo: "/images/eld/trust-eld.png" },
  { name: "TxELD", logo: "/images/eld/txeld.png" },
  { name: "TXT ELD", logo: "/images/eld/txt-eld.jpg" },
  { name: "US Power ELD", logo: "/images/eld/us-power-eld.svg" },
  { name: "UZB Prime ELD", logo: "/images/eld/uzb-prime-eld.svg" },
  { name: "Verizon Connect", logo: "/images/eld/verizon-connect.png" },
  { name: "Vitality ELD", logo: "/images/eld/vitality-eld.png" },
  { name: "Vestige", logo: "/images/eld/vestige.webp" },
  { name: "Vlog ELD", logo: "/images/eld/vlog-eld.png" },
  { name: "Vulcansols", logo: "/images/eld/vulcansols.svg" },
  { name: "Webfleet Solutions", logo: "/images/eld/webfleet-solutions.png" },
  { name: "WEX Telematics", logo: "/images/eld/wex-telematics.png" },
  { name: "X ELD", logo: "/images/eld/x-eld.png" },
  { name: "Xpert Logs", logo: "/images/eld/xpert-logs.png" },
  { name: "Xplore ELD", logo: "/images/eld/xplore-eld.png" },
  { name: "Zero Max ELD", logo: "/images/eld/zero-max-eld.png" },
  { name: "Zonar", logo: "/images/eld/zonar.png" },
  { name: "Zubie", logo: "/images/eld/zubie.jpg" },
];


function VendorGrid({ items }: { items: { name: string; logo: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.name + item.logo}
          className="flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center"
          style={{ minHeight: "140px" }}
        >
          <div className="relative mb-3 h-14 w-40 mx-auto">
            <Image
              src={item.logo}
              alt={item.name}
              fill
              className="object-contain"
              sizes="200px"
            />
          </div>
          <p className="text-sm font-medium text-tc-gray-100">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function EldPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-tc-blue md:text-4xl">
          Eligible Cameras
        </h1>
      </div>
      <div className="mt-10">
        <VendorGrid items={cameras} />
      </div>

      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-tc-blue md:text-4xl">
          Eligible ELDs
        </h1>
      </div>
      <div className="mt-10">
        <VendorGrid items={elds} />
      </div>
    </div>
  );
}
