import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl prose dark:prose-invert">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! If you have any questions, feedback, or issues with our services or payments, please reach out to us using any of the methods below.
        </p>
        
        <div className="mt-8 p-6 surface-card rounded-xl border border-border">
          <h2 className="mt-0 text-2xl font-bold">SnapCut AI</h2>
          <p className="text-muted-foreground mb-6">Trade Name: SnapCut Technologies Pvt Ltd</p>
          
          <div className="space-y-4">
            <div>
              <strong>Email:</strong> <br />
              <a href="mailto:support@snapcut.ai" className="text-primary hover:underline">support@snapcut.ai</a>
            </div>
            
            <div>
              <strong>Phone Number:</strong> <br />
              <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
              <p className="text-sm text-muted-foreground mt-1">(Available Mon-Fri, 9:00 AM - 6:00 PM IST)</p>
            </div>
            
            <div>
              <strong>Registered Office Address:</strong> <br />
              <address className="not-italic text-foreground">
                123 Innovation Tech Park,<br />
                Phase 2, Electronic City,<br />
                Bengaluru, Karnataka 560100,<br />
                India
              </address>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
