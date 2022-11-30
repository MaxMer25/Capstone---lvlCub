import React, {useContext} from "react";
import styled from "styled-components";
import {loginParent} from "../utils/loginParent";
import {loginChild} from "../utils/loginChild";
import {UserContext} from "../components/UserContext";

export default function Login() {
  const {setUser} = useContext(UserContext);
  return (
    <>
      <Stylewrapper>
        <h1>Welcome to lvlCub! Please Choose:</h1>
      </Stylewrapper>

      <StyledSvg
        role="img"
        width="100"
        height="152"
        viewBox="0 0 100 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={async () => {
          const user = await loginParent();
          setUser(user);
          alert(`Hello ${user.type}`);
        }}
      >
        <title>Parenticon</title>
        <path
          d="M34.5314 66.5313C34.5314 75.2813 29.0626 82.4687 22.3439 82.3125C2.65636 81.8437 10.7814 55.125 10.7814 55.125C17.5001 55.125 34.5314 57.7813 34.5314 66.5313Z"
          fill="#F29A2E"
        />
        <path
          d="M27.0311 68.25C27.0311 72.9375 24.0624 76.6875 20.4687 76.6875C9.9999 76.375 14.2187 62.1562 14.2187 62.1562C17.9687 62.1562 27.0311 63.5625 27.0311 68.25Z"
          fill="#BC600D"
        />
        <path
          d="M65.4688 66.5313C65.4688 75.2813 70.9375 82.4687 77.6562 82.3125C97.3437 81.8437 89.2187 55.125 89.2187 55.125C82.5 55.125 65.4688 57.7813 65.4688 66.5313"
          fill="#F29A2E"
        />
        <path
          d="M72.9688 68.25C72.9688 72.9375 75.9375 76.6875 79.5313 76.6875C90 76.375 85.7813 62.1562 85.7813 62.1562C82.0313 62.1562 72.9688 63.5625 72.9688 68.25Z"
          fill="#BC600D"
        />
        <path
          d="M90.625 117.156C90.625 131.375 9.375 131.375 9.375 117.156C9.375 57.9375 32.6562 59.5 50 59.5C67.3438 59.5 90.625 57.9375 90.625 117.156"
          fill="#F29A2E"
        />
        <path
          d="M66.4062 71.6875C62.8125 58.0938 37.1875 57.7813 33.75 71.8438C40.7812 65.5938 59.2187 65.5938 66.4062 71.6875Z"
          fill="#3E4347"
        />
        <path
          d="M61.25 77C58.9063 67.7813 41.25 67.625 38.9062 77C44.6875 72 55.3125 72 61.25 77Z"
          fill="#3E4347"
        />
        <path
          d="M96.875 109.188C96.5625 94.8125 87.8125 87.625 87.8125 87.625C87.8125 87.625 93.125 140.594 61.875 114.969H37.9687C6.875 140.438 12.1875 87.625 12.1875 87.625C12.1875 87.625 3.4375 94.8125 3.125 109.188L7.34375 106.688C7.34375 106.688 2.96875 116.219 7.65625 127.938L12.1875 122.625C12.1875 122.625 13.4375 133.719 25.4687 139.344L26.0938 134.5C26.0938 134.5 35.1562 141.688 50 141.688C64.8438 141.688 73.9062 134.5 73.9062 134.5L74.5313 139.344C86.5625 133.719 87.8125 122.625 87.8125 122.625L92.3437 127.938C97.1875 116.219 92.6562 106.688 92.6562 106.688L96.875 109.188Z"
          fill="#FFE8BB"
        />
        <path
          d="M37.9689 114.969C37.9689 114.969 11.5626 134.813 12.0314 87.625C12.1876 87.625 5.78139 143.719 37.9689 114.969ZM62.0314 114.969C62.0314 114.969 88.4376 134.813 87.9689 87.625C87.8126 87.625 94.2189 143.719 62.0314 114.969"
          fill="#3E4347"
        />
        <path
          d="M58.7499 97.9375C63.4374 110.75 61.8749 114.813 61.8749 114.813L50.1562 118.25L37.8124 114.813C37.8124 114.813 36.2499 110.594 40.9374 97.9375C20.3124 132.156 39.6874 136.688 39.6874 136.688C39.6874 136.688 38.7499 142.312 44.6874 147V143.25C44.6874 143.25 45.9374 146.688 49.6874 148.719C53.4374 146.688 54.6874 143.25 54.6874 143.25V147C57.9687 145.125 59.0624 141.219 59.0624 141.219L60.4687 144.031C65.1562 137.313 63.4374 132.625 62.0312 130.438C62.0312 130.594 62.1874 130.594 62.1874 130.594C62.1874 130.594 79.3749 132.156 58.7499 97.9375"
          fill="#F5F5F5"
        />
        <path
          d="M50 130.281C49.5313 128.875 48.4375 121.844 48.5938 117.469H51.25C51.0938 121.375 52.1875 128.406 52.5 129.344L50 130.281"
          fill="#3E4347"
        />
        <path
          d="M40 136.844C50.625 126.219 58.2812 122.937 62.5 130.75C56.0937 125.75 48.75 134.812 40 136.844Z"
          fill="#3E4347"
        />
        <path
          d="M61.5624 114.187C57.0311 112.156 42.6561 112.312 38.2811 114.187C36.5624 114.969 41.4061 119.656 49.8436 119.656C58.5936 119.656 63.2811 114.969 61.5624 114.187Z"
          fill="#947151"
        />
        <path
          d="M42.6562 95.125C39.2187 117 14.0625 111.531 14.0625 92.4687C14.0625 82.3125 14.0625 82.3125 29.8437 78.875C45.7812 75.2812 44.0625 87 42.6562 95.125Z"
          fill="#FFE8BB"
        />
        <path
          d="M40.1562 96.2187C38.5937 111.687 15.7812 109.187 17.1874 93.7187C17.8124 87.7812 17.8124 87.1562 29.2187 88.4062C40.7812 89.6562 40.6249 90.2812 40.1562 96.2187Z"
          fill="#3E4347"
        />
        <path
          d="M36.7188 95.2813C35.6251 104.656 19.5313 103.25 20.6251 93.875C21.0938 90.4375 21.0938 90.125 29.0626 90.9063C37.1876 91.6875 37.1876 91.8438 36.7188 95.2813"
          fill="white"
        />
        <path
          d="M35.4688 93.4063C35.4688 95.5938 33.75 97.3125 31.7187 97.3125C29.6875 97.3125 27.9688 95.5938 27.9688 93.4063C27.9688 91.2188 29.6875 89.9688 31.7187 89.9688C33.75 89.9688 35.4688 91.375 35.4688 93.4063Z"
          fill="#3E4347"
        />
        <path
          d="M57.1875 95.125C60.625 116.844 85.7812 111.531 85.7812 92.3125C85.7812 82.1563 85.7812 82.1563 70 78.7188C54.2187 75.2813 55.9375 87 57.1875 95.125"
          fill="#FFE8BB"
        />
        <path
          d="M59.8439 96.2187C61.4064 111.687 84.2189 109.187 82.8127 93.7187C82.1877 87.7812 82.1877 87.1562 70.7814 88.4062C59.2189 89.6562 59.2189 90.2812 59.8439 96.2187Z"
          fill="#3E4347"
        />
        <path
          d="M63.125 95.2813C64.2188 104.656 80.3125 103.25 79.2188 93.875C78.75 90.4375 78.75 90.125 70.7813 90.9063C62.8125 91.6875 62.8125 91.8438 63.125 95.2813"
          fill="white"
        />
        <path
          d="M70.625 93.4063C70.625 95.5938 72.3437 97.3125 74.375 97.3125C76.4062 97.3125 78.125 95.5938 78.125 93.4063C78.125 91.2188 76.4062 89.9688 74.375 89.9688C72.3437 89.9688 70.625 91.375 70.625 93.4063Z"
          fill="#3E4347"
        />
        <path
          d="M12.528 6.92L18.16 6.728C19.696 6.728 21.1147 7.35733 22.416 8.616C23.7173 9.87467 24.368 11.2293 24.368 12.68C24.368 14.1093 24.1013 15.4 23.568 16.552C23.056 17.704 22.384 18.632 21.552 19.336C19.8667 20.8293 18.0533 21.576 16.112 21.576C15.2587 21.576 14.5973 21.4267 14.128 21.128C13.68 20.808 13.456 20.4027 13.456 19.912C13.456 19.4213 13.5947 19.0373 13.872 18.76C14.1707 18.4613 14.4587 18.312 14.736 18.312C15.0347 18.312 15.5147 18.44 16.176 18.696C16.8373 18.952 17.488 19.08 18.128 19.08C19.2587 19.08 20.2293 18.6747 21.04 17.864C21.8507 17.0533 22.256 15.88 22.256 14.344C22.256 12.808 21.6587 11.528 20.464 10.504C19.2907 9.45867 17.84 8.936 16.112 8.936C15.152 8.936 14.0533 8.95734 12.816 9C12.56 10.8347 12.432 16.6373 12.432 26.408C12.432 28.264 11.8453 29.192 10.672 29.192C10.224 29.192 9.81867 29.0213 9.456 28.68C9.11467 28.3387 8.944 27.912 8.944 27.4C8.944 26.8667 9.168 26.28 9.616 25.64C10.0853 25 10.32 24.328 10.32 23.624C10.32 18.2053 10.1707 13.384 9.872 9.16H9.232C8.89067 9.16 8.58133 9.05334 8.304 8.84C8.048 8.60533 7.92 8.30667 7.92 7.944C7.92 7.58134 8.048 7.29334 8.304 7.08C8.58133 6.84533 8.89067 6.728 9.232 6.728L12.528 6.92ZM37.8802 24.712C38.0296 25.096 38.3389 25.6187 38.8082 26.28C39.2989 26.92 39.5442 27.4427 39.5442 27.848C39.5442 28.2533 39.4376 28.584 39.2242 28.84C39.0109 29.0747 38.7229 29.192 38.3602 29.192C37.4856 29.192 36.7069 28.2853 36.0242 26.472L35.7682 25.768C34.6802 28.0507 33.0482 29.192 30.8722 29.192C29.7842 29.192 28.8776 28.8507 28.1522 28.168C27.4482 27.464 27.0962 26.5893 27.0962 25.544C27.0962 23.9227 27.6509 22.5253 28.7602 21.352C29.8696 20.1787 31.3202 19.5493 33.1122 19.464C32.6856 18.7173 32.2056 18.1627 31.6722 17.8C31.1602 17.416 30.6909 17.192 30.2642 17.128C29.8376 17.064 29.4322 17.032 29.0482 17.032C28.6856 17.0107 28.3976 16.9253 28.1842 16.776C27.9709 16.6267 27.8642 16.3387 27.8642 15.912C27.8642 15.464 28.0349 15.1013 28.3762 14.824C28.7389 14.5467 29.1656 14.408 29.6562 14.408C31.0429 14.408 32.4082 15.1013 33.7522 16.488C35.0962 17.8747 36.2696 20.0507 37.2722 23.016L37.8802 24.712ZM32.3122 21.16C31.5442 21.16 30.8509 21.416 30.2322 21.928C29.6349 22.44 29.3362 23.1013 29.3362 23.912C29.3362 24.7227 29.6029 25.4053 30.1362 25.96C30.6909 26.4933 31.3522 26.76 32.1202 26.76C32.8882 26.76 33.5496 26.4933 34.1042 25.96C34.6589 25.4053 34.9362 24.7547 34.9362 24.008C34.9362 23.4747 34.8402 22.984 34.6482 22.536C34.4562 22.0667 34.3389 21.7787 34.2962 21.672C33.7416 21.3307 33.0802 21.16 32.3122 21.16ZM45.2397 21.48L45.4957 27.272C45.4957 27.848 45.3464 28.3173 45.0477 28.68C44.7704 29.0213 44.4291 29.192 44.0237 29.192C43.6184 29.192 43.2877 29.032 43.0317 28.712C42.7757 28.3707 42.6477 27.912 42.6477 27.336C42.6477 26.76 42.7011 25.9387 42.8077 24.872C43.0211 22.7387 43.1277 20.936 43.1277 19.464C43.1277 18.824 42.9251 18.216 42.5197 17.64C42.1357 17.0427 41.9437 16.5093 41.9437 16.04C41.9437 15.5707 42.1037 15.1867 42.4237 14.888C42.7437 14.568 43.1064 14.408 43.5117 14.408C44.5784 14.408 45.1117 15.2507 45.1117 16.936V18.184C45.7517 17.032 46.5197 16.1147 47.4157 15.432C48.3117 14.7493 49.1331 14.408 49.8797 14.408C50.6264 14.408 51.1917 14.6 51.5757 14.984C51.9811 15.3467 52.1837 15.8373 52.1837 16.456C52.1837 17.0747 52.0344 17.5973 51.7357 18.024C51.4371 18.4293 51.1171 18.632 50.7757 18.632C50.4344 18.632 50.1677 18.5467 49.9757 18.376C49.8051 18.184 49.6771 17.992 49.5917 17.8C49.5064 17.5867 49.3464 17.3947 49.1117 17.224C48.8771 17.032 48.5784 16.936 48.2157 16.936C47.5971 16.936 46.9784 17.3413 46.3597 18.152C45.7411 18.9627 45.3677 20.072 45.2397 21.48ZM60.4285 22.632L56.6205 22.312C56.2578 22.312 55.9698 22.344 55.7565 22.408C55.8845 23.624 56.3965 24.6373 57.2925 25.448C58.2098 26.2587 59.2872 26.664 60.5245 26.664C61.7192 26.664 62.7965 26.2267 63.7565 25.352C64.0978 25.0533 64.3538 24.904 64.5245 24.904C64.6952 24.904 64.8445 24.968 64.9725 25.096C65.1005 25.224 65.1645 25.3627 65.1645 25.512C65.1645 26.1307 64.5565 26.8987 63.3405 27.816C62.1458 28.7333 60.7805 29.192 59.2445 29.192C57.7298 29.192 56.4072 28.5733 55.2765 27.336C54.1672 26.0987 53.6125 24.5627 53.6125 22.728C53.6125 20.3813 54.4978 18.408 56.2685 16.808C58.0392 15.208 59.9912 14.408 62.1245 14.408C63.0205 14.408 63.7458 14.568 64.3005 14.888C64.8765 15.1867 65.1645 15.5813 65.1645 16.072C65.1645 16.5413 65.0152 16.9253 64.7165 17.224C64.4392 17.5227 64.1618 17.672 63.8845 17.672C63.6072 17.672 63.1272 17.544 62.4445 17.288C61.7832 17.032 61.1432 16.904 60.5245 16.904C59.3725 16.904 58.3698 17.256 57.5165 17.96C56.6845 18.6427 56.1298 19.496 55.8525 20.52L60.2685 20.264C61.2498 20.264 61.7405 20.648 61.7405 21.416C61.7405 22.2267 61.3032 22.632 60.4285 22.632ZM70.3885 19.848L70.5805 27.656C70.5805 28.104 70.4525 28.4773 70.1965 28.776C69.9405 29.0533 69.6098 29.192 69.2045 29.192C68.7992 29.192 68.4472 29.0533 68.1485 28.776C67.8712 28.4773 67.7325 28.104 67.7325 27.656L67.9565 21.32C67.9565 21.32 67.8818 19.5387 67.7325 15.976C67.7325 15.528 67.8712 15.1547 68.1485 14.856C68.4472 14.5573 68.7992 14.408 69.2045 14.408C69.6098 14.408 69.9405 14.5573 70.1965 14.856C70.4525 15.1333 70.5805 15.4853 70.5805 15.912C70.5805 16.3387 70.5698 16.6587 70.5485 16.872C71.7432 15.2293 73.1192 14.408 74.6765 14.408C76.9165 14.408 78.3565 15.912 78.9965 18.92L80.2125 24.424C80.3405 24.9147 80.5965 25.448 80.9805 26.024C81.3858 26.5787 81.5885 27.08 81.5885 27.528C81.5885 28.6373 81.0552 29.192 79.9885 29.192C78.9218 29.192 78.2285 28.3493 77.9085 26.664L76.6925 19.976C76.2872 17.8427 75.1885 16.776 73.3965 16.776C72.4792 16.776 71.7645 17.0853 71.2525 17.704C70.7405 18.3227 70.4525 19.0373 70.3885 19.848ZM91.6147 16.776C91.5081 16.776 90.1747 16.6907 87.6147 16.52C87.6147 16.7973 87.5721 17.8533 87.4867 19.688C87.4014 21.5227 87.3587 22.888 87.3587 23.784C87.3587 24.6587 87.5507 25.3947 87.9347 25.992C88.3401 26.568 88.5427 27.0907 88.5427 27.56C88.5427 28.0293 88.3827 28.424 88.0627 28.744C87.7427 29.0427 87.3801 29.192 86.9747 29.192C85.9081 29.192 85.3747 28.3493 85.3747 26.664L85.2467 20.168C85.2467 18.8453 85.2147 17.6613 85.1507 16.616H84.3827C84.0841 16.616 83.8387 16.5307 83.6467 16.36C83.4547 16.168 83.3587 15.912 83.3587 15.592C83.3587 15.272 83.4547 15.0267 83.6467 14.856C83.8387 14.664 84.0841 14.568 84.3827 14.568H85.0547C85.0121 13.4587 84.9907 12.616 84.9907 12.04C84.9907 11.4427 85.1294 10.9733 85.4067 10.632C85.7054 10.2693 86.0574 10.088 86.4627 10.088C86.8681 10.088 87.1987 10.2587 87.4547 10.6C87.7107 10.92 87.8387 11.4533 87.8387 12.2C87.8387 12.9467 87.8067 13.768 87.7427 14.664L91.6147 14.408C92.4467 14.408 92.8627 14.8027 92.8627 15.592C92.8627 16.3813 92.4467 16.776 91.6147 16.776Z"
          fill="black"
        />
      </StyledSvg>
      <StyledSvg
        role="img"
        width="100"
        height="146"
        viewBox="0 0 100 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={async () => {
          const user = await loginChild();
          setUser(user);
          alert(`Hello ${user.type}`);
        }}
      >
        <title>Childicon</title>
        <path
          d="M86.7188 84.6625L81.1562 78.1625C83.1565 77.0722 84.8111 75.4432 85.9324 73.4603C87.0537 71.4773 87.5968 69.2197 87.5 66.9437C87.2188 60.6625 82.0625 55.5687 75.7813 55.3812C73.4642 55.3106 71.1751 55.9023 69.1824 57.0868C67.1898 58.2713 65.5763 59.9995 64.5313 62.0687C61.8 60.6341 58.8697 59.6155 55.8375 59.0469L50.0125 61.7344L44.1625 59.0469C41.1303 59.6156 38.2 60.6341 35.4688 62.0687C34.4298 59.9946 32.8176 58.2621 30.8235 57.0768C28.8295 55.8914 26.5372 55.303 24.2188 55.3812C17.9375 55.6 12.7813 60.6625 12.5 66.9437C12.4039 69.2159 12.9439 71.4698 14.0591 73.4518C15.1743 75.4338 16.8205 77.0652 18.8125 78.1625L13.2813 84.6625C10.5041 87.915 8.47885 91.7404 7.35 95.8656L12.8406 103.8L6.82812 108.753L13.8156 117.853L7.37813 121.372C8.49317 124.04 10.3725 126.319 12.7796 127.923C15.1867 129.526 18.0142 130.381 20.9063 130.381H79.0938C85.1875 130.381 90.4094 126.662 92.6219 121.372L89.0625 116.312L93.0656 108.828L90.625 103.812L92.6938 95.9125C91.5476 91.7711 89.5081 87.9311 86.7188 84.6625V84.6625Z"
          fill="#FF822D"
        />
        <path
          d="M25.625 70.1937L21.9688 74.475C20.5635 73.9289 19.3555 72.9717 18.5026 71.7285C17.6496 70.4854 17.1913 69.0139 17.1875 67.5062C17.1875 63.4125 20.5313 60.0687 24.625 60.0687C27.6875 60.0687 30.3438 61.9437 31.4375 64.6312C29.2813 66.225 27.3125 68.1 25.625 70.1937ZM78 74.4437L74.3438 70.1625C72.6479 68.0603 70.6832 66.1901 68.5 64.6C69.625 61.9437 72.2813 60.0687 75.3438 60.0687C79.4375 60.0687 82.7812 63.4125 82.7812 67.5062C82.7812 70.6625 80.8125 73.3812 78 74.4437V74.4437Z"
          fill="#FF6723"
        />
        <path
          d="M50 139.756C37.9063 139.756 28.125 129.975 28.125 117.881V111.631H71.875V117.881C71.875 129.975 62.0937 139.756 50 139.756Z"
          fill="#E1D8EC"
        />
        <path
          d="M62.5 102.256H37.5C32.3125 102.256 28.125 106.444 28.125 111.631C28.125 116.819 32.3125 121.006 37.5 121.006H42.1875C43.7341 121.007 45.2568 120.625 46.6199 119.894C47.983 119.163 49.1442 118.107 50 116.819C50.8558 118.107 52.017 119.163 53.3801 119.894C54.7432 120.625 56.2659 121.007 57.8125 121.006H62.5C67.6875 121.006 71.875 116.819 71.875 111.631C71.875 106.444 67.6875 102.256 62.5 102.256Z"
          fill="#F3EEF8"
        />
        <path
          d="M25.25 100.912L36.0625 107.162C36.8125 107.6 37.0625 108.537 36.625 109.287C36.1875 110.037 35.25 110.287 34.5 109.85L23.6875 103.6C23.5096 103.499 23.3538 103.363 23.229 103.201C23.1042 103.039 23.0129 102.853 22.9605 102.655C22.9082 102.458 22.8957 102.251 22.924 102.049C22.9522 101.846 23.0205 101.651 23.125 101.475C23.5625 100.725 24.5 100.475 25.25 100.912ZM34.4687 113.412L23.6562 119.662C22.9375 120.1 22.6562 121.037 23.0937 121.787C23.5312 122.537 24.4687 122.787 25.2187 122.35L36.0312 116.1C36.7812 115.662 37.0312 114.725 36.5937 113.975C36.4924 113.797 36.3568 113.641 36.1946 113.516C36.0324 113.392 35.847 113.3 35.6492 113.248C35.4514 113.196 35.2451 113.183 35.0424 113.211C34.8397 113.24 34.6447 113.308 34.4687 113.412ZM63.9375 107.162L74.75 100.912C75.5 100.475 76.4375 100.725 76.875 101.475C77.3125 102.225 77.0625 103.162 76.3125 103.6L65.5 109.85C64.75 110.287 63.8125 110.037 63.375 109.287C63.2705 109.111 63.2022 108.916 63.174 108.714C63.1457 108.511 63.1582 108.305 63.2105 108.107C63.2629 107.909 63.3542 107.724 63.479 107.562C63.6038 107.399 63.7596 107.264 63.9375 107.162V107.162ZM65.5312 113.412L76.3437 119.662C77.0625 120.1 77.3437 121.037 76.9062 121.787C76.4687 122.537 75.5312 122.787 74.7812 122.35L63.9687 116.1C63.7909 115.999 63.635 115.863 63.5102 115.701C63.3854 115.539 63.2941 115.353 63.2418 115.155C63.1894 114.958 63.177 114.751 63.2052 114.549C63.2335 114.346 63.3018 114.151 63.4062 113.975C63.8437 113.225 64.7812 112.975 65.5312 113.412Z"
          fill="#CDC4D6"
        />
        <path
          d="M55.9062 59.0688C53.9604 58.69 51.9823 58.5016 50 58.5062C47.9688 58.5062 46 58.6938 44.0937 59.0688L47.75 62.975C48.9687 64.2563 51 64.2563 52.1875 62.975L55.9062 59.0688ZM58.9063 69.4438H41.0937C39.9062 69.4438 39.4062 70.9125 40.3125 71.6625L48.75 78.4125C49.5 79.0062 50.5312 79.0062 51.25 78.4125L59.6875 71.6625C60.5938 70.9125 60.0938 69.4438 58.9063 69.4438V69.4438ZM20.9375 117.538L8.03125 108.944H19.75C21.8438 108.944 22.6875 106.225 20.9375 105.038L7.34375 95.8813C6.625 98.3813 6.25 101.038 6.25 103.694V115.725C6.25 117.756 6.65625 119.663 7.40625 121.413H19.75C21.8438 121.413 22.6875 118.694 20.9375 117.538V117.538ZM92.5937 121.413C93.3437 119.663 93.75 117.756 93.75 115.725V103.694C93.75 101.038 93.375 98.4125 92.6875 95.8813L79.0625 105.006C77.3125 106.163 78.125 108.913 80.25 108.913H91.9688L79.0625 117.506C77.3125 118.663 78.125 121.413 80.25 121.413H92.5937ZM37.5 89.75C36.6712 89.75 35.8763 90.0792 35.2903 90.6653C34.7042 91.2513 34.375 92.0462 34.375 92.875V96C34.375 96.8288 34.7042 97.6237 35.2903 98.2097C35.8763 98.7958 36.6712 99.125 37.5 99.125C38.3288 99.125 39.1237 98.7958 39.7097 98.2097C40.2958 97.6237 40.625 96.8288 40.625 96V92.875C40.625 92.0462 40.2958 91.2513 39.7097 90.6653C39.1237 90.0792 38.3288 89.75 37.5 89.75ZM62.5 89.75C61.6712 89.75 60.8763 90.0792 60.2903 90.6653C59.7042 91.2513 59.375 92.0462 59.375 92.875V96C59.375 96.8288 59.7042 97.6237 60.2903 98.2097C60.8763 98.7958 61.6712 99.125 62.5 99.125C63.3288 99.125 64.1237 98.7958 64.7097 98.2097C65.2958 97.6237 65.625 96.8288 65.625 96V92.875C65.625 92.0462 65.2958 91.2513 64.7097 90.6653C64.1237 90.0792 63.3288 89.75 62.5 89.75ZM43.375 107.913L47.6875 112.225C48.9688 113.506 51.0625 113.506 52.375 112.225L56.6875 107.913C58.7812 105.819 57.2812 102.256 54.3437 102.256H45.75C42.75 102.256 41.2813 105.819 43.375 107.913V107.913Z"
          fill="#212121"
        />
        <path
          d="M27.2374 6.46764C29.1583 6.46764 30.9173 6.85613 32.5144 7.63311C34.1331 8.3885 34.9424 9.2626 34.9424 10.2554C34.9424 10.6871 34.7914 11.054 34.4892 11.3561C34.2086 11.6583 33.8633 11.8094 33.4532 11.8094C33.0432 11.8094 32.6331 11.6475 32.223 11.3238C31.8129 11 31.4137 10.6439 31.0252 10.2554C30.6583 9.84533 30.0647 9.47843 29.2446 9.15469C28.446 8.83095 27.4964 8.66908 26.3957 8.66908C23.9352 8.66908 21.9928 9.44605 20.5683 11C19.1655 12.5324 18.464 14.6259 18.464 17.2806C18.464 19.9137 19.241 22.1907 20.795 24.1115C22.3489 26.0324 24.3129 26.9928 26.687 26.9928C29.0827 26.9928 31.2626 25.8489 33.2266 23.5612C33.6583 23.0432 33.9712 22.7842 34.1655 22.7842C34.3813 22.7842 34.5432 22.8597 34.6511 23.0108C34.7806 23.1403 34.8453 23.3453 34.8453 23.6259C34.8453 23.9065 34.6187 24.3597 34.1655 24.9856C33.7338 25.5899 33.1403 26.2158 32.3849 26.8633C31.6511 27.4892 30.6798 28.0396 29.4712 28.5144C28.2842 28.9676 27.0432 29.1942 25.7482 29.1942C22.8993 29.1942 20.5252 28.1799 18.6259 26.1511C16.7482 24.1223 15.8094 21.5108 15.8094 18.3166C15.8094 15.1007 16.8885 12.3273 19.0468 9.99641C21.2266 7.6439 23.9568 6.46764 27.2374 6.46764ZM50.7815 24.3705C50.911 24.9964 51.1915 25.5576 51.6232 26.054C52.0764 26.5288 52.303 27.0144 52.303 27.5108C52.303 28.0072 52.1304 28.4173 51.7851 28.741C51.4397 29.0432 51.062 29.1942 50.652 29.1942C50.2419 29.1942 49.9074 29.1187 49.6484 28.9676C49.3894 28.8165 49.1735 28.5899 49.0009 28.2878C48.7635 27.8345 48.58 27.2842 48.4505 26.6367L47.0261 19.8705C46.8102 18.8777 46.4649 18.0899 45.9901 17.5072C45.5369 16.9245 44.8246 16.6331 43.8534 16.6331C42.9038 16.6331 42.1592 16.9676 41.6196 17.6367C41.1016 18.2842 40.8318 18.9964 40.8102 19.7734C40.9829 24.8885 41.0692 27.5971 41.0692 27.8993C41.0692 28.1799 40.9397 28.4712 40.6807 28.7734C40.4217 29.054 40.0872 29.1942 39.6771 29.1942C39.2671 29.1942 38.911 29.054 38.6088 28.7734C38.3282 28.4712 38.1879 27.9856 38.1879 27.3165C38.1879 26.6475 38.2419 25.0612 38.3498 22.5576C38.4577 20.0324 38.5117 18.0791 38.5117 16.6978C38.5117 15.3166 38.4577 13.4604 38.3498 11.1295C38.2419 8.79857 38.1879 7.29857 38.1879 6.62951C38.1879 5.96044 38.3282 5.47483 38.6088 5.17267C38.911 4.87052 39.2671 4.71944 39.6771 4.71944C40.0872 4.71944 40.4217 4.87052 40.6807 5.17267C40.9397 5.45325 41.0692 5.92807 41.0692 6.59714C41.0692 7.24462 41.0153 8.77699 40.9074 11.1943C40.821 13.5899 40.7779 15.554 40.7779 17.0863C42.0512 15.1871 43.5189 14.2374 45.1807 14.2374C47.4469 14.2374 48.9038 15.759 49.5512 18.8022L50.7815 24.3705ZM55.9047 26.6367C55.9047 23.9173 55.8507 21.5324 55.7428 19.482C55.6349 17.4317 55.5809 16.223 55.5809 15.8561C55.5809 15.4892 55.7212 15.1331 56.0018 14.7878C56.3039 14.4209 56.66 14.2374 57.0701 14.2374C57.4802 14.2374 57.8147 14.4101 58.0737 14.7554C58.3327 15.0791 58.4622 15.5648 58.4622 16.2122C58.4622 16.8381 58.3867 17.9065 58.2356 19.4173C58.0845 20.9065 58.009 22.4604 58.009 24.0791C58.009 24.7266 58.1385 25.3525 58.3975 25.9568C58.678 26.5396 58.8183 27.0791 58.8183 27.5755C58.8183 28.0504 58.678 28.4388 58.3975 28.741C58.1385 29.0432 57.7716 29.1942 57.2967 29.1942C56.8435 29.1942 56.4982 28.9353 56.2608 28.4173C56.0234 27.8993 55.9047 27.3058 55.9047 26.6367ZM56.9406 10.5791C56.4658 10.5791 56.0881 10.4497 55.8075 10.1907C55.527 9.93166 55.3867 9.55397 55.3867 9.05756C55.3867 8.56116 55.5593 8.1403 55.9047 7.79498C56.25 7.42807 56.66 7.24462 57.1349 7.24462C57.6097 7.24462 57.9874 7.3849 58.268 7.66548C58.5701 7.92447 58.7212 8.30217 58.7212 8.79857C58.7212 9.29498 58.5377 9.71584 58.1708 10.0612C57.8255 10.4065 57.4154 10.5791 56.9406 10.5791ZM63.3899 26.6367C63.3899 18.241 63.3359 13.223 63.228 11.5827C63.0338 8.60433 62.9367 6.86692 62.9367 6.37052C62.9367 5.87411 63.0769 5.47483 63.3575 5.17267C63.6597 4.87052 64.0158 4.71944 64.4259 4.71944C64.8359 4.71944 65.1705 4.87052 65.4295 5.17267C65.6885 5.47483 65.8179 5.85253 65.8179 6.30577C65.8179 7.66548 65.764 9.5108 65.6561 11.8417C65.4403 17.3237 65.3323 21.4029 65.3323 24.0791C65.3323 24.7266 65.5374 25.3525 65.9474 25.9568C66.3791 26.5396 66.5949 27.0683 66.5949 27.5432C66.5949 28.018 66.4331 28.4173 66.1093 28.741C65.7856 29.0432 65.4187 29.1942 65.0086 29.1942C63.9295 29.1942 63.3899 28.3417 63.3899 26.6367ZM73.8417 29.1942C72.482 29.1942 71.3381 28.6547 70.41 27.5755C69.482 26.4964 69.0179 25.2554 69.0179 23.8525C69.0179 22.4281 69.2985 21.1007 69.8597 19.8705C70.4208 18.6403 71.133 17.6259 71.9963 16.8273C72.8596 16.0288 73.7877 15.4029 74.7805 14.9496C75.7949 14.4748 76.8309 14.2374 77.8884 14.2374C78.9676 14.2374 79.9604 14.6367 80.8668 15.4353C80.8453 13.8166 80.7697 12.0468 80.6402 10.1259C80.5107 8.18347 80.446 6.96404 80.446 6.46764C80.446 5.97124 80.5755 5.56116 80.8345 5.23742C81.0935 4.8921 81.428 4.71944 81.8381 4.71944C82.2481 4.71944 82.5935 4.90289 82.874 5.2698C83.1762 5.61512 83.3273 6.08994 83.3273 6.69426C83.3273 7.27699 83.2301 8.65828 83.0359 10.8381C82.8632 12.9964 82.7769 15.0252 82.7769 16.9245C82.7769 18.8237 82.8524 20.4748 83.0035 21.8777C83.1546 23.259 83.3165 24.1978 83.4891 24.6942C83.9855 26.0108 84.2337 26.8957 84.2337 27.3489C84.2337 28.5791 83.7589 29.1942 82.8093 29.1942C81.6654 29.1942 80.9963 27.9748 80.8021 25.536C79.9388 26.6799 78.9028 27.5755 77.6942 28.223C76.4855 28.8705 75.2014 29.1942 73.8417 29.1942ZM72.5791 18.2194C71.6294 19.1691 71.1546 20.3345 71.1546 21.7158C71.1546 23.0971 71.6294 24.2734 72.5791 25.2446C73.5503 26.1942 74.7158 26.6691 76.0755 26.6691C77.4568 26.6691 78.6114 26.1942 79.5395 25.2446C80.4676 24.2734 80.9316 23.054 80.9316 21.5863C80.9316 20.1187 80.5107 18.9532 79.669 18.0899C78.8273 17.2266 77.6726 16.795 76.205 16.795C74.7589 16.795 73.5503 17.2698 72.5791 18.2194Z"
          fill="black"
        />
      </StyledSvg>
    </>
  );
}

const StyledSvg = styled.svg`
  justify-content: space-between;
  margin-left: 13%;
  margin-top: 40%;
`;

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 20% 1fr;
//   grid-template-rows: 1fr 1fr 1fr;
//   h1 {
//     grid-area: h;
//   }
//   .chooseParent {
//     grid-area: p;
//   }
//   .chooseChild {
//     grid-area: c;
//   }
//   .firstSvg {
//     grid-area: fsvg;
//   }
//   .secondSvg {
//     grid-area: ssvg;
//   }
//   grid-template-areas:
//     h
//     p c
//     fsvg ssvg;
// `;

const Stylewrapper = styled.div`
  text-align: center;
  h2 {
  }
`;
