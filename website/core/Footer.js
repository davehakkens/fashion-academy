/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="66"
              />
            )}
          </a>
          <div>
            <h5>Important</h5>
            <a href= "https://fixing.fashion/plan">
            Our plan to change the industry
            </a>
              <a href= "https://fixing.fashion/collection">
              Browse the collection
            </a>
          <a href= "https://fixing.fashion/community">
              See community fixes
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://www.onearmy.earth/">
              Latest news
            </a>
            <a href="https://discord.com/invite/SSBrzeR">
              Discord
            </a>
            <a href="https://instagram.com/fixingfashioncommunity">
              Instagram
            </a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="https://patreon.com/one_army">Become a Patreon</a>
            <a href="https://support.fixing.fashion">Make a donation</a>

            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}

          </div>
        </section>


      </footer>
    );
  }
}

module.exports = Footer;
