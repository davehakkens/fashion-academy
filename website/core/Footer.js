const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          padding: 25,
          borderTop: "1px solid #000000",
          textAlign: "center",
        }}
      >
        <span
          className="copyright"
          dangerouslySetInnerHTML={{ __html: this.props.config.copyright }}
        ></span>
      </footer>
    );
  }
}

module.exports = Footer;
