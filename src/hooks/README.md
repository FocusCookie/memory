# Custom Hooks

## useGames

Lets you subscribe to the games collection.

### Syntax

```javascript
import { useGames } from "src/hooks/useGames";

const { status, data } = useGames();
```

### Returns

an `ObservableStatus` with the following props:

- `data`
- `error`
- `firstValuePromise`
- `hasEmitted`
- `isComplete`
- `status`

See [reactfire docs](https://github.com/FirebaseExtended/reactfire/blob/main/docs/reference/interfaces/useObservable.ObservableStatus.md#iscomplete) for more infos.

## useGame

Lets you subscribe to a game.

### Syntax

```javascript
import { useGame } from "src/hooks/useGame";

const { status, data } = useGame(gameID);
```

### Returns

an `ObservableStatus` with the following props:

- `data`
- `error`
- `firstValuePromise`
- `hasEmitted`
- `isComplete`
- `status`

See [reactfire docs](https://github.com/FirebaseExtended/reactfire/blob/main/docs/reference/interfaces/useObservable.ObservableStatus.md#iscomplete) for more infos.
