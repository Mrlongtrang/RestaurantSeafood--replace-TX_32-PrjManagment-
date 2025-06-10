import React from "react";
import CarouselImage from "../../components/Layout/components/carousel";
import BestSeller from "./BestSeller";
import styles from "./Home.module.scss";

function Home() {
  return (
    <React.Fragment>
      <CarouselImage />
      <div className={styles.policy}>
        <button>
          <div className={styles.left}>
            <img
              src="/camket.png"
              class="attachment-medium size-medium"
              alt="icon-chat-luong"
              loading="lazy"
            />
          </div>
          <div className={styles.right}>
            <p>Cam Kết</p>
            <span>Sản phẩm chất lượng</span>
          </div>
        </button>

        <button>
          <div className={styles.left}>
            <img
              width="187"
              height="153"
              src="./delivery.png"
              class="attachment-medium size-medium"
              alt="Giao hàng"
              loading="lazy"
            />
          </div>
          <div className={styles.right}>
            <p>Giao Hàng</p>
            <span>Nhanh chóng toàn quốc</span>
          </div>
        </button>

        <button>
          <div className={styles.left}>
            <img
              width="187"
              height="188"
              src="./freeicon.png"
              class="attachment-medium size-medium"
              alt="Miễn phí vận chuyển"
              loading="lazy"
              sizes="(max-width: 187px) 100vw, 187px"
            />
          </div>
          <div className={styles.right}>
            <p>Free Giao Hàng</p>
            <span>Cho đơn hàng {">"} 3.000.000đ</span>
          </div>
        </button>

        <button>
          <div className={styles.left}>
            <img
              width="187"
              height="187"
              src="./payment.png"
              class="attachment-medium size-medium"
              alt="Thanh toán"
              loading="lazy"
              sizes="(max-width: 187px) 100vw, 187px"
            />
          </div>
          <div className={styles.right}>
            <p>Thanh Toán</p>
            <span>Thanh toán khi đặt hàng</span>
          </div>
        </button>
      </div>
      <BestSeller />
    </React.Fragment>
  );
}

export default Home;
