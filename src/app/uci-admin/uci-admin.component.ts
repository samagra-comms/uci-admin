import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import * as langConfig from '../../assets/lang/eng.json';
import {StorageService} from '../shared/services/storage.service';

@Component({
  selector: 'app-uci-admin',
  templateUrl: './uci-admin.component.html',
  styleUrls: ['./uci-admin.component.scss']
})
export class UciAdminComponent implements OnInit {
  public url = environment.url;
  public nlUrl = environment.nlUrl;
  public userSegemtUrl = environment.userSegemtUrl;
  public blobUrl = environment.blobUrl;
  public uciBotPhoneNumber = environment.botPhoneNumber;
  public resourceService = (langConfig as any).default;
  public userId = environment.userId;
  public orgId = environment.orgId;
  public token = environment.token;
  public broadcastAdapterId = environment.broadcastAdapterId;
  public adapterId = environment.adapterId;
  public authToken;
  public userProfile: any = {token: this.token, maskedPhone: null, tcStatus: null, channel: '013016492159606784174', profileUserTypes: [{subType: 'deo', type: 'administrator'}], updatedDate: '2021-10-25 12:34:08:453+0000', managedBy: null, flagsValue: 4, id: this.userId, recoveryEmail: 'lm****************@yopmail.com', identifier: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', updatedBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', externalIds: [], roleList: [{name: 'Book Creator', id: 'BOOK_CREATOR'}, {name: 'Membership Management', id: 'MEMBERSHIP_MANAGEMENT'}, {name: 'Flag Reviewer', id: 'FLAG_REVIEWER'}, {name: 'Report Viewer', id: 'REPORT_VIEWER'}, {name: 'Program Manager', id: 'PROGRAM_MANAGER'}, {name: 'Program Designer', id: 'PROGRAM_DESIGNER'}, {name: 'System Administration', id: 'SYSTEM_ADMINISTRATION'}, {name: 'Content Curation', id: 'CONTENT_CURATION'}, {name: 'Book Reviewer', id: 'BOOK_REVIEWER'}, {name: 'Content Creator', id: 'CONTENT_CREATOR'}, {name: 'Org Management', id: 'ORG_MANAGEMENT'}, {name: 'Course Admin', id: 'COURSE_ADMIN'}, {name: 'Org Moderator', id: 'ORG_MODERATOR'}, {name: 'Public', id: 'PUBLIC'}, {name: 'Admin', id: 'ADMIN'}, {name: 'Course Mentor', id: 'COURSE_MENTOR'}, {name: 'Content Reviewer', id: 'CONTENT_REVIEWER'}, {name: 'Report Admin', id: 'REPORT_ADMIN'}, {name: 'Org Admin', id: 'ORG_ADMIN'}], rootOrgId: this.orgId, prevUsedEmail: '', firstName: 'Reviewer', isMinor: true, tncAcceptedOn: 1578647946965, allTncAccepted: {orgAdminTnc: {tncAcceptedOn: '2020-12-11 09:34:03:037+0000', version: '3.5.0'}, groupsTnc: {tncAcceptedOn: '2020-10-22 12:30:36:504+0000', version: '3.4.0'}}, phone: '', dob: '2020-12-31', status: null, lastName: '', tncLatestVersion: 'v1', aadhaarno: null, roles: [{role: 'ADMIN', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'ANNOUNCEMENT_SENDER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'BOOK_CREATOR', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'BOOK_REVIEWER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'CONTENT_CREATOR', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'CONTENT_REVIEWER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'COURSE_ADMIN', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'COURSE_CREATOR', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'COURSE_MENTOR', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'FLAG_REVIEWER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'OFFICIAL_TEXTBOOK_BADGE_ISSUER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'ORG_ADMIN', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'ORG_MODERATOR', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'PROGRAM_MANAGER', createdDate: '2021-08-27 14:39:54:741+0000', updatedBy: 'c977cd14-8cdf-4f17-b4bd-418736e97861', createdBy: 'c977cd14-8cdf-4f17-b4bd-418736e97861', scope: [{organisationId: '0130144097756938240'}, {organisationId: 'ORG_001'}], updatedDate: '2021-08-27 14:41:32:152+0000'}, {role: 'REPORT_ADMIN', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}, {role: 'REPORT_VIEWER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}, {organisationId: 'ORG_001'}], updatedDate: null}, {role: 'TEACHER_BADGE_ISSUER', createdDate: null, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', createdBy: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', scope: [{organisationId: 'ORG_001'}], updatedDate: null}], prevUsedPhone: '', stateValidated: true, isDeleted: null, organisations: [{organisationId: 'ORG_001', approvedBy: null, channel: 'ROOT_ORG', updatedDate: '2021-03-30 06:22:49:085+0000', approvaldate: null, isSystemUpload: false, isDeleted: false, id: '012718445039091712313', isApproved: false, orgjoindate: '2019-03-14 06:14:56:439+0000', isSelfDeclaration: false, updatedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', orgName: 'Sunbird', addedByName: null, addedBy: '781c21fc-5054-4ee0-9a02-fbb1006a4fdd', associationType: 1, locationIds: ['969dd3c1-4e98-4c17-a994-559f2dc70e18'], orgLocation: [{type: 'state', id: '969dd3c1-4e98-4c17-a994-559f2dc70e18'}], externalId: null, userId: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', isSchool: false, hashTagId: 'ORG_001', isSSO: true, isRejected: false, locations: [{code: '29', name: 'Karnataka', id: '969dd3c1-4e98-4c17-a994-559f2dc70e18', type: 'state', parentId: null}], position: null, orgLeftDate: null}], provider: null, countryCode: null, tncLatestVersionUrl: 'https://dev-sunbird-temp.azureedge.net/portal/terms-and-conditions-v1.html', maskedEmail: 'us****@yopmail.com', regorgid: null, email: 'us****@yopmail.com', rootOrg: {keys: {encKeys: ['5766', '5767'], signKeys: ['5766', '5767']}, channel: 'ROOT_ORG', description: 'Andhra State Boardsssssss', updatedDate: '2018-11-28 10:00:08:675+0000', organisationType: 5, isTenant: true, provider: null, id: 'ORG_001', email: 'support_dev@sunbird.org', slug: 'sunbird', isSSOEnabled: null, orgName: 'Sunbird', updatedBy: '1d7b85b0-3502-4536-a846-d3a51fd0aeea', locationIds: ['969dd3c1-4e98-4c17-a994-559f2dc70e18'], externalId: null, orgLocation: [{type: 'state', id: '969dd3c1-4e98-4c17-a994-559f2dc70e18'}], isRootOrg: true, rootOrgId: 'ORG_001', createdDate: null, createdBy: null, hashTagId: 'ORG_001', status: 1}, tcUpdatedDate: null, userLocations: [{code: '28', name: 'Andhra Pradesh', id: '1222633c-bef9-4be8-a42d-edffa5a9c7ab', type: 'state', parentId: null}, {code: '2822', name: 'ANANTAPUR', id: 'f3e5b768-9008-4073-baf5-1dffc3c12b0b', type: 'district', parentId: '1222633c-bef9-4be8-a42d-edffa5a9c7ab'}], recoveryPhone: '', userName: null, userId: '95e4942d-cbe8-477d-aebd-ad8e6de4bfc8', declarations: [{persona: 'default', errorType: null, orgId: '0124650007179264000', status: 'SUBMITTED', info: {'declared-email': '', 'declared-ext-id': '33333', 'declared-phone': '9595251484', 'declared-school-name': 'QA ORG', 'declared-school-udise-code': 'someid1234'}}, {persona: 'default', errorType: null, orgId: 'ORG_001', status: 'SUBMITTED', info: {'declared-email': '', 'declared-ext-id': '', 'declared-phone': '', 'declared-school-name': 'QA ORG', 'declared-school-udise-code': 'someid1234'}}], promptTnC: false, lastLoginTime: 0, createdDate: null, framework: {id: ['NCFCOPY']}, createdBy: null, profileUserType: {subType: 'deo', type: 'administrator'}, tncAcceptedVersion: 'v1', skills: [], rootOrgAdmin: true, userRoles: ['PUBLIC', 'ADMIN', 'ANNOUNCEMENT_SENDER', 'BOOK_CREATOR', 'BOOK_REVIEWER', 'CONTENT_CREATOR', 'CONTENT_REVIEWER', 'COURSE_ADMIN', 'COURSE_CREATOR', 'COURSE_MENTOR', 'FLAG_REVIEWER', 'OFFICIAL_TEXTBOOK_BADGE_ISSUER', 'ORG_ADMIN', 'ORG_MODERATOR', 'PROGRAM_MANAGER', 'REPORT_ADMIN', 'REPORT_VIEWER', 'TEACHER_BADGE_ISSUER'], orgRoleMap: {}, organisationIds: ['ORG_001'], hashTagIds: ['ORG_001'], userOrgDetails: {ADMIN: {orgId: 'ORG_001', orgName: 'Sunbird'}, ANNOUNCEMENT_SENDER: {orgId: 'ORG_001', orgName: 'Sunbird'}, BOOK_CREATOR: {orgId: 'ORG_001', orgName: 'Sunbird'}, BOOK_REVIEWER: {orgId: 'ORG_001', orgName: 'Sunbird'}, CONTENT_CREATOR: {orgId: 'ORG_001', orgName: 'Sunbird'}, CONTENT_REVIEWER: {orgId: 'ORG_001', orgName: 'Sunbird'}, COURSE_ADMIN: {orgId: 'ORG_001', orgName: 'Sunbird'}, COURSE_CREATOR: {orgId: 'ORG_001', orgName: 'Sunbird'}, COURSE_MENTOR: {orgId: 'ORG_001', orgName: 'Sunbird'}, FLAG_REVIEWER: {orgId: 'ORG_001', orgName: 'Sunbird'}, OFFICIAL_TEXTBOOK_BADGE_ISSUER: {orgId: 'ORG_001', orgName: 'Sunbird'}, ORG_ADMIN: {orgId: 'ORG_001', orgName: 'Sunbird'}, ORG_MODERATOR: {orgId: 'ORG_001', orgName: 'Sunbird'}, PROGRAM_MANAGER: {orgId: '0130144097756938240'}, REPORT_ADMIN: {orgId: 'ORG_001', orgName: 'Sunbird'}, REPORT_VIEWER: {orgId: 'ORG_001', orgName: 'Sunbird'}, TEACHER_BADGE_ISSUER: {orgId: 'ORG_001', orgName: 'Sunbird'}}, roleOrgMap: {ADMIN: ['ORG_001'], ANNOUNCEMENT_SENDER: ['ORG_001'], BOOK_CREATOR: ['ORG_001'], BOOK_REVIEWER: ['ORG_001'], CONTENT_CREATOR: ['ORG_001'], CONTENT_REVIEWER: ['ORG_001'], COURSE_ADMIN: ['ORG_001'], COURSE_CREATOR: ['ORG_001'], COURSE_MENTOR: ['ORG_001'], FLAG_REVIEWER: ['ORG_001'], OFFICIAL_TEXTBOOK_BADGE_ISSUER: ['ORG_001'], ORG_ADMIN: ['ORG_001'], ORG_MODERATOR: ['ORG_001'], PROGRAM_MANAGER: ['0130144097756938240', 'ORG_001'], REPORT_ADMIN: ['ORG_001'], REPORT_VIEWER: ['ORG_001', 'ORG_001'], TEACHER_BADGE_ISSUER: ['ORG_001']}};

  constructor() { }

  ngOnInit(): void {
    this.authToken = StorageService.getItem('accessToken');
  }

}
