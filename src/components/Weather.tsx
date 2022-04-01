import CountDown from "./CountDown";

export default function Weather() {
  return (
    <div className="section card">
      <h2>Local Weather</h2>
      <p>In your zip code, the weather is:</p>
      <table>
        <tbody>
          <tr>
            <td>City</td>
            <td>Nashville</td>
          </tr>
          <tr>
            <td>Rain</td>
            <td>light right</td>
          </tr>
          <tr>
            {/*Put other applicable "main" stuff in here*/}
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>1.5</td>
          </tr>
        </tbody>
      </table>
      <CountDown />
    </div>
  );
}
