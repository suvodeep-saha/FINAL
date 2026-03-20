import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl prose dark:prose-invert">
        <h1>Terms and Conditions</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and SnapCut AI ("we," "us," or "our"), concerning your access to and use of our website and services.
        </p>
        <h2>1. User Representations</h2>
        <p>
          By using our services, you represent and warrant that all registration information you submit will be true, accurate, current, and complete. You also agree to maintain the accuracy of such information.
        </p>
        <h2>2. Acceptable Use</h2>
        <p>
          You agree not to use our services for any illegal or unauthorized purpose. Uploading illegal, offensive, or copyrighted materials without permission is strictly prohibited and may result in immediate account termination.
        </p>
        <h2>3. Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the website and our services are our proprietary property. You retain full ownership and rights to the original images you upload for processing.
        </p>
        <h2>4. Subscription and Payments</h2>
        <p>
          If you choose to purchase a subscription (e.g., our Pro or Unlimited plans), you agree to provide current, complete, and accurate purchase and account information for all purchases made via the website. We bill you through an online billing account provided by Razorpay.
        </p>
        <h2>5. Modifications and Interruptions</h2>
        <p>
          We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
