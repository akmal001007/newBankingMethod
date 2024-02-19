import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          <div key={client.id} className={`flex-1 ${styles.flexCenter}
          sm:m-[120px]`}>
            <img src={client.logo} alt="logo" 
            className="sm:w-[192px] h-[100px] object-contain"/>
          </div>
        })}
      </div>
    </section>
  )
}

export default Clients