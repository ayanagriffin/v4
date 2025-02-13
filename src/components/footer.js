import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto 10px;

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  font-size: var(--fz-xs);
  line-height: 1;
  padding: 20px;
  padding-top: 10px;

  p {
    font-family: var(--font-poppins);
    a {
      font-size: var(--fz-xs);
      ${({ theme }) => theme.mixins.inlineLink};
      ${({ theme }) => theme.mixins.navLink};
      color: var(--p-text) !important;
      &:active {
        color: var(--p-text);
      }
      &:after {
        background-color: var(--p-text);
      }
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} className="project-icon-link">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledSocialLinks>
    <StyledCredit>
      <p>
        Designed and built by <a href="https://brittanychiang.com/">Brittany Chiang</a> and{' '}
        <a href="https://github.com/ayanagriffin/ayanagriffin.github.io">Ayana Griffin</a>
        {', '}
        Icons by <a href="https;//flaticon.com">Flaticon</a>
      </p>
    </StyledCredit>
  </StyledFooter>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
