import styled from "styled-components";
import {loginChild} from "../utils/loginChild";
import React, {useContext} from "react";
import {UserContext} from "../components/UserContext";

export default function ChildIcon() {
  const {setUser} = useContext(UserContext);
  return (
    <>
      <svg
        role="img"
        width="100"
        height="146"
        viewBox="0 0 100 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={async () => {
          const user = await loginChild();
          setUser(user.type);
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
      </svg>
    </>
  );
}
