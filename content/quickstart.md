##Outage / Activity Details
https://w.amazon.com/bin/view/RTDS/WWTD/RoboticsDeploymentEngineering/Floor_Safety_Systems/Deploying_FSS/MSC_Setup/#HSetMRG1IPAddress

#### What is the purpose of this activity or change?
To update correct IP address for spare VGT1 Spare MSC MRG1

#### What will be required to execute this change?
Access to MSC room

#### What is the expected end state of the system after this change?
VGT1 Spare MSC MRG1 will have correct IP address

#### What assumptions, if any, are being made about the state of the system at the time of this change?
System is up, MSC is running

##Impact / Risk Assessment
#### Why is it necessary? What is the impact of not making this change?
Spare MSC is not fully operational

#### Why does this activity or change need to be done under MCM? Can it be safely automated?
Under MCM for visibility and scheduling.

#### Why is this the correct time/day to complete the CM?
to get the spare MSC fully operational asap while giving approvers time to approve

#### Are there any related, prerequisite changes upon which this CM hinges?
No

#### Will this CM be in any way intrusive, and if so, how will you know? What teams, services or functionality will be impacted?
 non-intrusive

#### Is this change modifying a tier-1 service or website? Which one?
No

#### How has this change been tested to verify it’s safe for production?
https://w.amazon.com/bin/view/RTDS/WWTD/RoboticsDeploymentEngineering/Floor_Safety_Systems/Deploying_FSS/MSC_Setup/#HSetMRG1IPAddress

##Affected Services
Spare MSC (non-intrusive)

#### Does this change involve other dependencies? Are they aware of this CM and on the cc-list or approvals for it?

#### Provide links to your dependencies dashboard(s)

##Worst Case Scenario

#### What could happen if everything goes wrong with this change? 
Spare MSC will still not be fully operational.

#### How does this CM attempt to mitigate this risk?
Following step by step https://w.amazon.com/bin/view/RTDS/WWTD/RoboticsDeploymentEngineering/Floor_Safety_Systems/Deploying_FSS/MSC_Setup/#HSetMRG1IPAddress

#### Is this change following [Two Person Rule](https://w.amazon.com/bin/view/AWS/2-person_Rule/)? If no, what are the reasons to not follow "Two Person Rule"?

##Rollback Procedure
Detailed rollback procedures can be added at the step level - just provide a general overview here.

#### What conditions would indicate a need to rollback? Provide graphs with rollback thresholds marked, or other clear indicators to the technicians when a rollback is required

#### In the event of problems, what will you do to return your system to a known good state?
Revert changes, contact robotics on-call.

#### If this is a software or infrastructure change, has the rollback procedure been verified in a development environment?

##CM Bar Raiser Assessment

For more information about the CM Bar Raiser Assessment, see https://policy.amazon.com/standard/71684#s5.1
Questions 1-5 are to be answered by the CM Author


```
1) Does this CM involve manual configuration changes to network infrastructure devices?         [Check if YES ___]
2) Does this CM involve manual or automated network-related changes during active production?   [Check if YES ___]
3) Does this CM's rollback require significant work or external support to undo the change?     [Check if YES ___]
4) Does this CM involve changes which could cause an outage across multiple sites or services?  [Check if YES ___]
5) Is this CM using a new or untested process not yet defined as standard work?                 [Check if YES ___]

```
Note For CM Authors: If any question is checked above - add your team's CM Bar Raiser alias as a Level 3 Approver.
Bar Raiser Aliases may be found at https://policy.amazon.com/standard/71684#s5.2


```
Question 6 is to be answered by the Level 2 CM Approver:

6) Do you, as the L2 CM Approver, have concerns that you feel make this CM require Bar Raising? [Add Comment if Yes]

```

Note For L2 CM Approvers: If answering “yes” - note those concerns in the comments section of this CM and add the appropriate Bar Raiser to this CM as a Level 3 Approver.
You do not need to edit this part of the CM or use the “Approved with Comments” approval status.