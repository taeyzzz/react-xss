# react-xss
# Explaination why react is safe for XSS by desired
- https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected

# Demo
- https://taey-react-xss-learning.netlify.app/

# vulnerable
https://github.com/taeyzzz/react-xss/blob/master/src/components/ChatArea/index.jsx#L16

# Becareful
## Aware input from user href
```javascript
const userWebsite = "javascript:alert('Hacked!');";

class UserProfilePage extends React.Component {
  render() {
    return (
      <a href={userWebsite}>My Website</a>
    )
  }
}

ReactDOM.render(<UserProfilePage />, document.querySelector("#app"));

```
## XSS via dangerouslySetInnerHTML
```javascript
const aboutUserText = "<img onerror='alert(\"Hacked!\");' src='invalid-image' />";

class AboutUserComponent extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{"__html": aboutUserText}} />
    );
  }
}

ReactDOM.render(<AboutUserComponent />, document.querySelector("#app"))

```
