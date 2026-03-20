import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl prose dark:prose-invert">
        <h1>Shipping and Delivery Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          SnapCut AI provides a Software as a Service (SaaS) platform for image background removal. 
        </p>
        <h2>1. Digital Delivery Integration</h2>
        <p>
          As our services are entirely digital, no physical goods are shipped or delivered. Upon successful payment verification through Razorpay, your account limits or premium features (e.g., HD downloads, Unlimited Processing) will be unlocked instantly.
        </p>
        <h2>2. Accessing Your Services</h2>
        <p>
          You can access your upgraded plan and process images immediately directly from the web application dashboard. Processed images are delivered instantaneously to your browser via digital download.
        </p>
        <h2>3. Issues with Delivery</h2>
        <p>
          If you experience a delay in your account upgrade after a successful payment, or if you cannot download your processed images, please verify your internet connection. If the issue persists for more than 15 minutes, please contact our support team immediately.
        </p>
        <h2>4. Contact Us</h2>
        <p>
          For any delivery or account upgrade problems: support@snapcut.ai
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
