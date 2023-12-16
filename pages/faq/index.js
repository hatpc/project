import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const faq = () => {
  return (
    <>
      <Header />
      <div id="faq" className="my-5">
        <div className="content container">
          <h1 className="text-center">FAQs</h1>
          <h3 className="mt-5 mb-4">OUR BOOKS MATERIALS</h3>
          <div>
            <input type="checkbox" id="question1" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question1" className="question">
              Will your books and materials withstand repeated use—are they satisfaction guaranteed?
            </label>
            <div className="answers">
              <span>Our hardcover books are library bound with exposed reinforced endsheets, which means extra lasting power, use after use. They are side sewn or section sewn, and all covers are laminated with glossy film. The books are vibrant, durable, and unconditionally guaranteed. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question2" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question2" className="question">
              Do you have &quot;green&quot; products?
            </label>
            <div className="answers">
              <span>Many of Cavendish Square&apos;s products are produced with recycled pulp content, allowing our company to pursue its green goals while adding additional value for your eco-conscious purchases. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question3" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
              Do you provide book processing?
            </label>
            <div className="answers">
              <span>Cavendish Square gladly provides library processing services. Please call 1-877-980-4450 or email Customer Service to learn more about processing and available and customizable options for your bookshelf needs. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question4" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question4" className="question">
              Do you keep my library processing specifications on file?
            </label>
            <div className="answers">
              <span>Yes, Cavendish Square keeps all customer processing specifications on file. You won&apos;t need to fill out library processing forms each time you order, we&apos;ll do it for you. You can download a processing form here. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question5" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question5" className="question">
              What is the charge for processing?
            </label>
            <div className="answers">
              <span>We offer free processing on all orders over $350.  On orders less than $350 the cost of barcodes and marc records is $25.00 per order. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question6" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question6" className="question">
              Are your books on Accelerated Reader?
            </label>
            <div className="answers">
              <span>Accelerated Reader quizzes are available for many of our books.  The AR Logo will appear where quizzes are available.  For more about AR, please click here. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question7" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question7" className="question">
              Are your books correlated to state and national standards?
            </label>
            <div className="answers">
              <span>Yes, all of our books are correlated to state and national standards. This web site&apos;s correlation page will help you easily match our products with your state standards, and choose excellent selections for national standards. Otherwise, feel free to call us at 1-877-980-4450 and we&apos;ll assist you in meeting your needs. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question8" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question8" className="question">
              Where can I find information about your authors or how can I contact them?
            </label>
            <div className="answers">
              <span>Cavendish Square commissions authors who are subject-matter experts and professional writers. If you&apos;d like to learn more about an author&apos;s background or if you wish to contact one of our authors, please click here to submit your contact information along with the author&apos;s name. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question9" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question9" className="question">
              How do I submit a book idea, collection suggestion, or artwork to Cavendish Square?
            </label>
            <div className="answers">
              <span>Cavendish Square would like to hear from you—we&apos;re dedicated to offering an ever-expanding array of solutions that will meet your needs. Any ideas, suggestions, or creative input that Cavendish Square can follow to help you achieve academic success, please feel free to share with our representatives. Artists and writers may also contact our Customer Service team for information about contributing to Cavendish. </span>

            </div>
          </div>
          <div>
            <input type="checkbox" id="question10" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question10" className="question">
              Are your books available in other formats, such as eBooks?
            </label>
            <div className="answers">
              <span>Cavendish Square titles are also available as eBooks.  Also available are over 50 database titles.  Click here for more information on our eBooks and digital databases.  For a complete list of available digital resources, please call Customer Service at 1-877-980-4450 between 9AM and 5 PM EST, Monday through Friday. </span>
            </div>
          </div>
          <h3 className="mt-5 mb-4">PURCHASE, ORDERING, RETURNS</h3>
          <div>
            <input type="checkbox" id="question11" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question11" className="question">
              What is the &quot;S&L&quot; price?
            </label>
            <div className="answers">
              <span>S&L means school/library.  Our school/library prices reflect a 30% discount off list prices.
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question12" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question12" className="question">
              How do I order Cavendish Square Materials?
            </label>
            <div className="answers">
              <span>You can order Cavendish Square Products by mail, toll-free fax or telephone, and online through our cart or quick order portals.</span>
              <span>
                By mail, please submit your order form (from a catalog, brochure, or PDF) or purchase order to:</span>
              <span>
                Cavendish Square<br />
                243 5th Avenue, Suite 136<br />
                New York, NY 10016<br />
                Attention: Customer Service</span>
              <span>
                Place an order anytime through our toll-free fax at 1-877-980-4454. Please fax the order form or purchase order; be sure to include the billing and shipping addresses, item ISBNs, titles, quantity, price, shipping/handling, and tax (if applicable). Please include any special instructions or library processing requests.</span>
              <span>
                Please feel free to order toll-free via telephone between 9 AM and 5 PM, Eastern Standard Time, Monday through Friday at 1-877-980-4450.</span>
              <span>
                To order online, please select items for your cart and proceed to Checkout, or you can input ISBNs directly to create a quick order here.
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question13" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question13" className="question">
              How do I redeem coupons/discounts/online purchase bonuses?
            </label>
            <div className="answers">
              <span>Cavendish Square is happy to redeem all coupons, price-reduction offers, online purchase bonuses, and special discounts. Please include any coupons or offers with mailed or faxed orders.</span>
              <span>
                When placing your online order please follow instructions for coupon and bonus redemption. For any price-reduction offers and special discounts, please include these details within the comment section of the purchase portal.</span>
              <span>
                You can also contact Customer Service at 1-877-980-4450 between 9 AM and 5 PM, EST, Monday through Friday to redeem offers.
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question14" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question14" className="question">
              How long will it take for me to receive my order once it has been placed?
            </label>
            <div className="answers">
              <span>Our standard shipping time is 7 to 10 business days from the receipt of your purchase order for in-stock items. If your order requires expedited delivery, please call Customer Service at 1-877-980-4450. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question15" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question15" className="question">
              What happens when an item is Out of Stock? Does that mean it will be backordered?
            </label>
            <div className="answers">
              <span>Cavendish Square does its very best to keep everything in stock. If a product is temporarily out of stock, it will be backordered automatically and shipped immediately upon availability.</span>
              <span> At the time of placing your order (either via phone, fax, or online), please specify how you would wish to process backorders if they occur. </span>
              <span>Selections include:<br />
                <span>
                  <span>Billing at the time of order processing or billing when the backordered item(s) ship</span>
                  <span>Canceling an order if backorder status occurs, or creating a termination date when an order should be canceled if items still remain on backorder status on that date</span>
                </span>
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question16" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question16" className="question">
              What is your return policy?
            </label>
            <div className="answers">
              <span>Our products are satisfaction guaranteed. If you are not completely satisfied with your purchase, please contact Customer Service within 30 days of delivery and we will gladly replace your products or credit your account.<br />
                We will accept returns on any material that is found to be unsatisfactory including improperly processed books, however, properly process books cannot be returned. Products must be returned within 60 days of purchase and must be accompanied by a copy of the invoice. </span>
            </div>
          </div>
          <h3 className="mt-5 mb-4">TAX &amp; SHIPPING</h3>
          <div>
            <input type="checkbox" id="question17" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question17" className="question">
              Do you charge sales tax?
            </label>
            <div className="answers">
              <span>We only apply taxes for states where applicable. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question18" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question18" className="question">
              What is the cost for shipping & handling?
            </label>
            <div className="answers">
              <span>Shipping is FREE on all orders over $350.  </span>
              <span>On orders less than $350, shipping is 9% of your invoice total.  </span>
              <span>Additional shipping charges will be applied to all orders that are outside of the United States. </span>
            </div>
          </div>
          <h3 className="mt-5 mb-4">RIGHTS &amp; USAGE</h3>
          <div>
            <input type="checkbox" id="question19" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question19" className="question">
              How do I inquire about reproduction, translation, electronic publishing, or subsidiary rights?
            </label>
            <div className="answers">
              <span>Permissible usage varies per product. Many of our books are available for translation, subsidiary rights licensing, and usage other than original purposes.</span>
              <span>
                You can verify usage rights through Customer Service at 1-877-980-4450 or by submitting your query through our Customer Service form.</span>
              <span>
                When contacting us, please have the book title/product name and ISBN that you&apos;re inquiring about, along with a description of how you would like to use/reproduce the materials.</span>
              <span>
                Via standard mail, please apply for permissions to:<br />
                Cavendish Square Publishing<br />
                Attn: Permissions Department<br />
                243 5th Avenue, Suite 136<br />
                New York, NY 10016
              </span>
            </div>
          </div>
          <h3 className="mt-5 mb-4">DOMESTIC &amp; INTERNATIONAL SALES</h3>
          <div>
            <input type="checkbox" id="question20" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question20" className="question">
              How can I find my local sales representative?
            </label>
            <div className="answers">
              <span>Our Representatives—who are experts in making sure that your acquisition needs are met—can be located by calling Customer Service at 1-877-980-4450. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question21" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question21" className="question">
              How do I purchase books if I live outside of the United States?
            </label>
            <div className="answers">
              <span>Customer Service can help you directly with international purchases. Additional shipping charges will be added for international delivery. Please call Customer Service at 1-877-980-4450. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question22" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question22" className="question">
              Do you have distributors outside of the United States?
            </label>
            <div className="answers">
            </div>
          </div>
          <div>
            <input type="checkbox" id="question23" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question23" className="question">
              How can I obtain a copy of your catalogs and brochures?
            </label>
            <div className="answers">
              <span>We produce several catalogs and brochures, covering our full line across all divisions. To download any brochures and catalogs in PDF form, or to request delivery of any of our current materials, please click here. </span>
            </div>
          </div>
          <h3 className="mt-5 mb-4">CUSTOMER SERVICE</h3>
          <div>
            <input type="checkbox" id="question24" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question24" className="question">
              What are your customer services?
            </label>
            <div className="answers">
              <span>Our Customer Service Representatives are outstanding individuals who understand the importance of knowing you. Cavendish Square customer services are varied and flexible, depending upon your specific needs. If you need to view a sample or find out more about our books, collections, or other products in order to make an informed purchase, we&apos;re ready to serve you.</span>
              <span>
                Our Customer Service Representatives are available from 9 AM to 5 PM EST at 1-877-980-4450. <br />
                Cavendish Square<br />
                243 5th Avenue, Suite 136<br />
                New York, NY 10016<br />
                Customer Service <br />
                Toll-free: 1-877-980-4450<br />
                Toll-free fax: 1-877-980-4454<br />
                Customer Service Form    </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question25" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question25" className="question">
              May I submit a question for FAQ?
            </label>
            <div className="answers">
              We would like your Cavendish Square experience to be as user-friendly as possible, please feel free to submit a FAQ for inclusion in this section.
            </div>
          </div>
          <h3 className="mt-5 mb-4">USING THIS WEBSITE</h3>
          <div>
            <input type="checkbox" id="question26" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question26" className="question">
              What are the benefits of registering for an online user account?
            </label>
            <div className="answers">
              <span>We know that your time is very valuable. As a registered user, the time you spend browsing our site and learning about our products can be saved in your Wish List, and you can create multiple Wish Lists for future visits. You can also save carts for impending purchases. You can customize the information that you&apos;d like to receive from Cavendish Square regarding your areas of interest. </span>
              <span>
                Another advantage of being an online user is that you become eligible for exclusive discounts and generous offers from Cavendish Square.</span>
              <span>
                Register Me Today!
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question27" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question27" className="question">
              What if I lose my username/password or I cannot log into my account?
            </label>
            <div className="answers">
              <span>If you have entered the correct username/password and you&apos;re still unable to log in, please call Customer Service at 1-877-980-4450. We will also remind you of your username and password in case you forget. Otherwise, you can reset your password through our reset portal. </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question28" name="q" className="questions" />
            <div className="plus">+</div>
            <label htmlFor="question28" className="question">
              Who do I contact with feedback regarding this site?
            </label>
            <div className="answers">
              <span>All comments are welcome. Please submit your feedback, suggestions, or comments here.  To read our privacy policy, please click here. </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default faq;


