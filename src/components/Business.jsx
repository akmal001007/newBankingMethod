import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row rounded-[25px] 
    ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full 
      bg-dimBlue ${styles.flexCenter}`}
      >
        <img
          src={icon}
          alt="icon"
          className="w-[50%]
        h-[50%] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4
          className="font-poppins font-semibold 
        text-white mb-1 text-[18px]"
        >
          {title}
        </h4>
        <p
          className="font-poppins font-normal 
        text-dimWhite mb-1 text-[16px]"
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          asperiores recusandae facere tenetur. Quidem, nisi magni.
        </p>
        <Button styles="mt-8" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return (
            <FeatureCard key={feature.id} {...feature} index={index} />
          )
        })}
      </div>
    </section>
  );
};

export default Business;
