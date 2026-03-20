import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl prose dark:prose-invert">
        <h1>Refund and Cancellation Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          At SnapCut AI, we strive to ensure our customers are completely satisfied with our background removal services. This policy outlines our guidelines for refunds and subscription cancellations.
        </p>
        <h2>1. Subscription Cancellations</h2>
        <p>
          You can cancel your subscription at any time by logging into your account and navigating to the billing settings, or by contacting our support team. Your cancellation will take effect at the end of the current paid term.
        </p>
        <h2>2. Refund Eligibility</h2>
        <p>
          We offer a 7-day money-back guarantee for all new subscriptions. If you are not satisfied with our service within the first 7 days of your initial purchase, you are eligible for a full refund, provided you have not exceeded normal usage limits (processed fewer than 20 images).
        </p>
        <h2>3. Non-Refundable Scenarios</h2>
        <p>
          Refunds are not granted in the following scenarios:
        </p>
        <ul>
          <li>After the initial 7-day period has passed.</li>
          <li>For subsequent subscription renewals.</li>
          <li>If your account is terminated due to a violation of our Terms and Conditions.</li>
        </ul>
        <h2>4. Processing Refunds</h2>
        <p>
          Approved refunds will be processed within 5-7 business days and credited back to the original payment method used during the transaction via Razorpay.
        </p>
        <h2>5. Contact Us for Refunds</h2>
        <p>
          To request a refund or if you have questions about cancellations, please contact us at support@snapcut.ai.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
