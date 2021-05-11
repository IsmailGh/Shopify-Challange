import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.a`
  display: block;
  text-align: center;
  font-size: 0.8em;
  flex-direction: column;
`;

export const SourceCode = () => (
  <StyledCopyright
    href="https://github.com/IsmailGh/ShopifyChallange"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    <div>{`Fall 2021 Shopify Challange Source code`}</div>
  </StyledCopyright>
);
