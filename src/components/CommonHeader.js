import style from "./commonheader.module.css";

const CommonHeader = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerText}>Next JS CRUD Demo</div>
    </div>
  );
};

export default CommonHeader;
