import styles from 'components/Main/Step3.module.scss'

export function Step3 ({handleCardInputValue}) {

  return (
    <>
      {/* <!-- credit-card phase --> */}
      <form className="step3form" data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.cardInfo}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input type="text" placeholder="John Doe" data-name="cardHolder" onChange={handleCardInputValue}/>
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" data-name="cardNum" onChange={handleCardInputValue}/>
            </div>
          </div>
          <div className={styles.verifyInfo}>
            <div class={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <input type="text" placeholder="MM/YY" data-name="expireDate" onChange={handleCardInputValue}/>
            </div>
             <div className={styles.inputGroup}>
                <div className={styles.inputLabel}>CVC / CCV</div>
                <input type="text" placeholder="123" data-name="cvc" onChange={handleCardInputValue}/>
            </div>
          </div>
        </section>
      </form>
    </>
  )
}