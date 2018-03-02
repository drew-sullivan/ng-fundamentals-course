import { ISession } from './../../../../shared/event.model';
import { Injectable } from '@angular/core';


@Injectable()
export class VoterService {

    deleteVoter(session: ISession, voterName: string) {
        //creates array that contains all but voter passed in as param
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        //returns boolean saying that at least one member of the voters array contains the voterName param
        return session.voters.some(voter => voter === voterName);
    }
}