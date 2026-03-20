import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl prose dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          Welcome to SnapCut AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
          If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This may include your name, email address, and payment information.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes, such as facilitating account creation, processing payments, delivering services, and sending administrative information.
        </p>
        <h2>3. Image Data and Processing</h2>
        <p>
          Any images uploaded to SnapCut AI for background removal are temporarily stored for processing. We do not use your uploaded images for any other purposes, nor do we share them with third parties. Images are automatically deleted from our servers after rendering.
        </p>
        <h2>4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
        </p>
        <h2>5. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us at support@snapcut.ai.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
