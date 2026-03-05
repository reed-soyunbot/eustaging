import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Auto Insurance Telematics Aggregator | TruckerCloud",
    template: "%s | TruckerCloud",
  },
  description:
    "TruckerCloud is the leading telematics data aggregator for auto insurance. Streamline FNOL reporting, reduce claims costs, and access real-time truck tracking and ELD data—all in one platform.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TruckerCloud",
              url: "https://truckercloud.com",
              logo: "https://truckercloud.com/images/Group.png",
              description:
                "TruckerCloud is the leading telematics data aggregator for auto insurance.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3490 Piedmont Rd NE Suite 1350",
                addressLocality: "Atlanta",
                addressRegion: "GA",
                postalCode: "30305",
                addressCountry: "US",
              },
              sameAs: [
                "https://x.com/truckercloud",
                "https://www.linkedin.com/company/truckercloud/",
                "https://www.facebook.com/TruckerCloud/",
              ],
            }),
          }}
        />
        {/* CookieYes */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/c8c891665e6315ca22d3553e/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGW3TMZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* HubSpot */}
        <Script
          id="hs-script-loader"
          src="https://js-na1.hs-scripts.com/8758171.js"
          strategy="afterInteractive"
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGW3TMZ');`}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10960975496"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10960975496');`}
        </Script>

        {/* Intercom */}
        <Script id="intercom-settings" strategy="afterInteractive">
          {`window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "jyc9kifw"
          };`}
        </Script>
        <Script id="intercom-widget" strategy="afterInteractive">
          {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/jyc9kifw';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
        </Script>
      </body>
    </html>
  );
}
