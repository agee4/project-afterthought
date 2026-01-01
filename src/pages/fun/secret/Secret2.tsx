// Secret2Page.tsx
import Page from "../../../components/Page"
import BattleOfTheBobs from "./_Bob/BattleOfTheBobsComp"

const Secret2Page = () => {
  return (
    <Page title="A Secret ??">
      <h1 className="m-5 text-5xl font-bold">Battle of the Bobs</h1>
      <p>Wow, you managed to find this hidden page!</p>
      <p>
        Enjoy this little minigame I made: beat up the evil Bob and become the
        best Bob!
      </p>
      <br />
      <BattleOfTheBobs />
    </Page>
  )
}

export default Secret2Page
