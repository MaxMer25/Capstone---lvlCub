import React from "react";
import styled from "styled-components";

export const LoadingAnimation = () => {
  return (
    <StyledLoading>
      <div className="loadingParent">
        <div class="custom-loader"></div>
        <h2>Loading.. please give me a second 🐯</h2>
      </div>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  .loadingParent {
    text-align: center;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .custom-loader {
    width: 40px;
    height: 40px;
    transform: perspective(150px) rotateX(0) rotateY(0);
    animation: f3-1 1s infinite linear, f3-2 1.5s infinite linear -0.25s;
  }

  @keyframes f3-1 {
    50% {
      transform: perspective(150px) rotateX(180deg) rotateY(0);
    }
    100% {
      transform: perspective(150px) rotateX(180deg) rotateY(180deg);
    }
  }

  @keyframes f3-2 {
    0%,
    33% {
      background: #ff6978;
    }
    33.1%,
    66% {
      background: #b1ede8;
    }
    66.1%,
    100% {
      background: #fffcf9;
    }
  }
`;
