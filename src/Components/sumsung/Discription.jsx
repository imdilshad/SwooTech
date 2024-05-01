import img1 from "./det1.jpeg.png";
import img2 from "./det2.png.png";
import img3 from "./det3.png.png";

import "./discription.css";

export default function AppDiscription() {
  return (
    <>
      <div>
        <div className="w-100 mt-5">
          <a className=" anchor ms-4" href="#">
            <b>DESCRIPTION</b>
          </a>
          <a className=" anchor ms-4" href="#">
            <b>REVIEWS(5)</b>
          </a>
          <a className=" anchor ms-4" href="#">
            <b>ADDITIONAL INFORMATION</b>
          </a>
        </div>
        <div>
          <p className="ms-4 mt-5">
            Built for ultra-fast performance, the thin and lightweight Samsung
            Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop
            on a crisp, clear Super AMOLED display. Expandable memory lets you
            enjoy more of your favorite content. And connecting and sharing
            between all your Samsung devices is easier than ever. Welcome to
            life with the reimagined Samsung Galaxy Tab S2. Watch thev world
            come to life on your tablet's <b>Super AMOLED display *</b> . With
            deep contrast, rich colors and crisp details, you won't miss a thing
          </p>
        </div>
        <div>
          <img className="w-100 ms-4" src={img1} alt="" />
        </div>
        <div className="text-center fs-6">
          <p className="text-secondary">
            * The Galaxy Tab S2’s 4 : 3 ratio display provides you with an ideal
            environment for performing office tasks.
          </p>
        </div>

        <div>
          <a className="anchor ms-4" href="#">
            <b>From the manufacturer</b>
          </a>
        </div>
        <div>
          <p className="ms-4 mt-2">
            Dive into the blockbuster movies you can't wait to see. Switch
            between your favorite apps quickly and easily. The new and improved
            octa-core processor gives you the power and speed you need to see
            more and do more. Expand your tablet's memory from 32GB to up to an
            additional 128GB and enjoy more of your favorite music, photos,
            movies and games on the go with a microSD card. With Quick Connect,
            start a show on your Smart TV and, with the touch of a button, take
            it with you by moving it to your Galaxy Tab S2.
          </p>

          <p className="ms-4 ">
            Or send videos and photos from your tablet screen to your TV screen
            to share with everyone in the room. Work effortlessly between your
            Samsung tablet and Samsung smartphone with SideSync. Quickly drag
            and drop photos between devices. And even respond to a call from
            your smartphone right on your tablet screen.
          </p>
        </div>
        <div className="mt-4 w-100">
          <img className=" dis-img ms-4" src={img2} alt="a" />
          <img className=" dis-img ms-4" src={img3} alt="a" />
        </div>
      </div>

      <div>
        <a className=" anchor ms-4" href="#">
          <b>Semsong Galaxy Tab S2, 8-Inch, White</b>
        </a>
        <p className="mt-4 ms-4 w-100">
          {" "}
          Galaxy Tab S2 8.0 Android tablet. Announced Jul 2015. Features 8.0″
          display, Exynos 5433 chipset, 8 MP primary camera, 2.1 MP front
          camera, 4000 mAh The tablet is powered by a non-removable 4000mAh
          lithium-ion battery. The flashless main camera has 8 megapixels,
          autofocus and HDR capabilities ... Pros and cons: Build quality is
          greatOr send videos and photos from your tablet screen to your TV screen
          to share with everyone in the room. Work effortlessly between your
          Samsung tablet and Samsung smartphone with SideSync{" "}
        </p>
        <a className="mt-4 ms-4" href="#">see more</a>
      </div>
    </>
  );
}
