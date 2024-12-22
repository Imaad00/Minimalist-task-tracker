import GitHubButton from 'react-github-btn';

function Footer({settings}) {
  return (
    <footer className={`safari_only py-3 text-center ${settings.askForSwitchDarkMode ? "text-dark":"text-white"}`}>
      <p>
        Follow me on{" "}
        <a
          href="https://github.com/Imaad00/Minimalist-task-tracker"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-decoration-none mx-2"
        >
          GitHub &#10084;&#65039;
        </a>
      </p>
      <GitHubButton
        href="https://github.com/Imaad00/Minimalist-task-tracker"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star Imaad00/Minimalist-task-tracker on GitHub"
        className="p-0 m-0"
      >
        Give this project a Star
      </GitHubButton>
    </footer>
  );
}

export default Footer;
