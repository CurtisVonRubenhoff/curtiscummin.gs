import * as React from "react"

const sns = [
  {
    text: `Twitter`,
    icon: `twitter`,
    url: `https://twitter.com/parallax_curtis`,
  },
  {
    text: `LinkedIn`,
    icon: `linkedin`,
    url: `https://www.linkedin.com/in/curtis-cummings-9536b994/`,
  },
  {
    text: `Instagram`,
    icon: `instagram`,
    url: `https://www.instagram.com/curtiscummin.gs/`,
  },
  {
    text: `GitHub`,
    icon: `github`,
    url: `https://github.com/CurtisVonRubenhoff`,
  },
]

const Social = () => {
  return (
    <div className="social-buttons nes-balloon from-left">
      <p>Share it:</p>
      <ul className="share">
        {sns.map(link => (
          <li key={link.url}>
            <a href={link.url}>
              <i aria-hidden="true" className={`${link.icon} nes-icon`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social
