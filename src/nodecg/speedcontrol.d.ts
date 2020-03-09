
import { RunDataArray } from './external/runDataArray';
import { RunDataActiveRunSurrounding } from './external/runDataActiveRunSurrounding';
import { Timer } from './external/timer';

type SpeedcontrolReplicantMap = {
    runDataArray: RunDataArray,
    runDataActiveRunSurrounding: RunDataActiveRunSurrounding,
    timer: Timer
};

type SpeedcontrolReplicantName = (
    'runDataArray' |
    'runDataActiveRunSurrounding' |
    'timer'
);

export {
    RunDataArray,
    RunDataActiveRunSurrounding,
    Timer,
    SpeedcontrolReplicantMap,
    SpeedcontrolReplicantName
};
