# Test Cases: Ziyou Club Login Screen

## Test Suite: Login Functionality

### Test Case ID: LOG_001
**Test Case Name:** Valid Login Credentials  
**Priority:** High  
**Precondition:** 
- App is installed and launched
- User has valid registered account
- Internet connection is available  

**Test Steps:**
1. Enter valid registered email in Email field
2. Enter correct password in Password field
3. Click "Acessar" button

**Expected Result:**  
- User should be successfully logged in
- User should be directed to the main fitness content screen

**Post-condition:**  
User is logged into the application

---

### Test Case ID: LOG_002
**Test Case Name:** Invalid Email Format  
**Priority:** High  
**Precondition:**
- App is installed and launched
- Internet connection is available

**Test Steps:**
1. Enter invalid email format (e.g., "test@", "test.com", "@test.com")
2. Enter any password
3. Click "Acessar" button

**Expected Result:**
- System should display email format validation error
- Login should not proceed

**Post-condition:**
User remains on login screen with error message

---

### Test Case ID: LOG_003
**Test Case Name:** Empty Email Field  
**Priority:** Medium  
**Precondition:**
- App is installed and launched

**Test Steps:**
1. Leave Email field empty
2. Enter any password
3. Click "Acessar" button

**Expected Result:**
- System should display required field error for email
- Login should not proceed

**Post-condition:**
User remains on login screen with error message

---

### Test Case ID: LOG_004
**Test Case Name:** Empty Password Field  
**Priority:** Medium  
**Precondition:**
- App is installed and launched

**Test Steps:**
1. Enter valid email
2. Leave Password field empty
3. Click "Acessar" button

**Expected Result:**
- System should display required field error for password
- Login should not proceed

**Post-condition:**
User remains on login screen with error message

---

### Test Case ID: LOG_005
**Test Case Name:** Password Toggle Visibility  
**Priority:** Low  
**Precondition:**
- App is installed and launched

**Test Steps:**
1. Enter any text in Password field
2. Click eye icon in Password field
3. Click eye icon again

**Expected Result:**
- Password should toggle between visible and masked characters
- Eye icon should change to reflect current state

**Post-condition:**
Password visibility state matches last toggle action

---

### Test Case ID: LOG_006
**Test Case Name:** Forgot Password Link  
**Priority:** Medium  
**Precondition:**
- App is installed and launched
- Internet connection is available

**Test Steps:**
1. Click "Esqueceu sua senha?" link

**Expected Result:**
- User should be directed to password recovery screen

**Post-condition:**
User is on password recovery screen

---

### Test Case ID: LOG_007
**Test Case Name:** Offline Login Attempt  
**Priority:** Medium  
**Precondition:**
- App is installed and launched
- Device is in offline mode

**Test Steps:**
1. Enter valid email
2. Enter valid password
3. Click "Acessar" button

**Expected Result:**
- System should display no internet connection error
- Login should not proceed

**Post-condition:**
User remains on login screen with connectivity error message

---

### Test Case ID: LOG_008
**Test Case Name:** Invalid Login Credentials  
**Priority:** High  
**Precondition:**
- App is installed and launched
- Internet connection is available

**Test Steps:**
1. Enter registered email
2. Enter incorrect password
3. Click "Acessar" button

**Expected Result:**
- System should display invalid credentials error
- Login should not proceed

**Post-condition:**
User remains on login screen with error message
# Test Cases for Ziyou Club Fitness App
## Module: Dashboard Screen

### Test Case ID: TC_DS_001
**Test Case Title:** Verify Last Session Display  
**Precondition:** App is installed and user is logged in  
**Priority:** High  
**Test Data:** User has completed at least one session  
**Test Steps:**
1. Navigate to dashboard screen
2. Observe "Sua ultima sessão" (Last session) section
3. Verify time display format
4. Verify calories count
5. Click on "detalhes" (details) link

**Expected Results:**
- Last session time should be displayed in HH:MM:SS format
- Calories burned should be displayed as a number
- Date should be displayed correctly
- Details link should be clickable and navigate to session details

### Test Case ID: TC_DS_002
**Test Case Title:** Verify Equipment Connection  
**Precondition:** App is installed and Bluetooth is enabled  
**Priority:** High  
**Test Data:** Compatible exercise equipment nearby  
**Test Steps:**
1. Navigate to dashboard screen
2. Click on "Conecte seu equipamento" (Connect your equipment)
3. Observe Bluetooth pairing process
4. Complete connection

**Expected Results:**
- Bluetooth pairing interface should appear
- Available equipment should be listed
- Successful connection should be indicated
- Connected equipment should be displayed in the interface

### Test Case ID: TC_DS_003
**Test Case Title:** Verify Weekly Summary Display  
**Precondition:** App is installed and user has activity data  
**Priority:** High  
**Test Data:** User has completed workouts in the current week  
**Test Steps:**
1. Navigate to dashboard screen
2. Observe "Resumo da semana" (Weekly summary) section
3. Verify all metrics displayed

**Expected Results:**
- Minutes per week should show current/target (60/609)
- Calories should show current/target (421/2146)
- Average speed should display correctly (17.6 km/h)
- Progress circle should reflect current progress

### Test Case ID: TC_DS_004
**Test Case Title:** Verify Weekly Progress Calendar  
**Precondition:** App is installed and user has activity data  
**Priority:** Medium  
**Test Steps:**
1. Navigate to dashboard screen
2. Observe weekly calendar (D,S,T,Q,Q,S,S)
3. Verify completed workout indicators
4. Verify current day indicator

**Expected Results:**
- Days should be correctly labeled
- Completed workouts should show checkmark
- Current day should be highlighted
- Past days should show appropriate status indicators

### Test Case ID: TC_DS_005
**Test Case Title:** Verify Weekly Goal Progress  
**Precondition:** App is installed and user has set weekly goals  
**Priority:** Medium  
**Test Data:** User has completed at least one session  
**Test Steps:**
1. Navigate to dashboard screen
2. Observe weekly goal progress bar
3. Verify progress percentage calculation
4. Verify goal completion message

**Expected Results:**
- Progress bar should reflect current progress
- Percentage should be accurately calculated
- Message should show "100% da sua meta de 1 sessões semanais!"
- Progress should match completed sessions in calendar

### Test Case ID: TC_DS_006
**Test Case Title:** Verify Navigation Bar Functionality  
**Precondition:** App is installed and user is logged in  
**Priority:** High  
**Test Steps:**
1. Observe bottom navigation bar
2. Click on each navigation icon
3. Return to home screen
4. Verify current section highlight

**Expected Results:**
- All navigation icons should be clickable
- Each icon should navigate to correct section
- Current section should be highlighted
- Home icon should return to dashboard

### Test Case ID: TC_DS_007
**Test Case Title:** Verify Device Status Display  
**Precondition:** App is installed  
**Priority:** Low  
**Test Steps:**
1. Observe top status bar
2. Verify battery indicator
3. Verify time display
4. Verify connection indicators

**Expected Results:**
- Battery level should be accurately displayed (72%)
- Time should be correctly shown (13:34)
- WiFi/cellular signals should be visible
- Bluetooth status should be indicated

### Test Case ID: TC_DS_008
**Test Case Title:** Verify Share Functionality  
**Precondition:** App is installed and user has activity data  
**Priority:** Medium  
**Test Steps:**
1. Navigate to dashboard screen
2. Click share icon in weekly summary
3. Verify sharing options
4. Test sharing process

**Expected Results:**
- Share icon should be clickable
- Sharing options should appear
- Sharing process should complete successfully
- Shared content should include relevant workout data

### Test Case ID: TC_DS_009
**Test Case Title:** Verify Data Refresh  
**Precondition:** App is installed and user has completed a new workout  
**Priority:** High  
**Test Steps:**
1. Complete a new workout session
2. Return to dashboard screen
3. Pull to refresh (if available)
4. Observe data update

**Expected Results:**
- New workout data should appear in last session
- Weekly summary should update
- Calendar should update
- Goal progress should update

### Test Case ID: TC_DS_010
**Test Case Title:** Verify Metric Unit Display  
**Precondition:** App is installed  
**Priority:** Medium  
**Test Steps:**
1. Navigate to dashboard screen
2. Observe all metric displays
3. Verify unit consistency
4. Check number formatting

**Expected Results:**
- Speed should be displayed in km/h
- Time should be in HH:MM:SS format
- Calories should be whole numbers
- All units should be consistently formatted
---
# Test Cases: Class Search/Filter Screen

## Test Suite: Class Search and Filter Functionality

### Test Case ID: SRCH_001
**Test Case Name:** Filter Expansion/Collapse  
**Priority:** High  
**Precondition:** 
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Click each filter option (Modalidades, Distância, etc.)
2. Verify dropdown expands
3. Click again on expanded filter
4. Verify dropdown collapses

**Expected Result:**
- Each filter should expand when clicked
- Each filter should collapse when clicked again
- Only one filter should be expanded at a time

**Post-condition:**
All filters return to collapsed state

---

### Test Case ID: SRCH_002
**Test Case Name:** Multiple Filter Selection  
**Priority:** High  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Expand Modalidades filter
2. Select multiple options
3. Expand Duração filter
4. Select duration option
5. Click "Ver todas as aulas"

**Expected Result:**
- Multiple selections should be allowed within filters
- Selected filters should be visually indicated
- Results should reflect all applied filters

**Post-condition:**
Search results display with selected filters applied

---

### Test Case ID: SRCH_003
**Test Case Name:** Filter Reset/Clear  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Multiple filters are selected

**Test Steps:**
1. Locate clear/reset option
2. Clear all selected filters
3. Verify filter state

**Expected Result:**
- All filters should reset to default state
- No selections should remain active
- Search results should update accordingly

**Post-condition:**
All filters return to default state

---

### Test Case ID: SRCH_004
**Test Case Name:** Caloric Expenditure Range Filter  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Expand "Gasto Calórico Est" filter
2. Select calorie range
3. Verify results update

**Expected Result:**
- Calorie range selection should be possible
- Results should show classes within selected range
- Range values should be clearly displayed

**Post-condition:**
Classes filtered by selected calorie range

---

### Test Case ID: SRCH_005
**Test Case Name:** Distance-Based Search  
**Priority:** High  
**Precondition:**
- User is logged in
- Location services enabled
- Search screen is loaded

**Test Steps:**
1. Expand "Distância" filter
2. Select distance range
3. Verify location-based results

**Expected Result:**
- Distance options should be available
- Results should show classes within selected radius
- Location permissions should be requested if needed

**Post-condition:**
Classes filtered by distance from user location

---

### Test Case ID: SRCH_006
**Test Case Name:** Instructor Filter  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Expand "Professor" filter
2. Select specific instructor
3. Verify filtered results

**Expected Result:**
- Instructor list should be populated
- Results should show only selected instructor's classes
- Instructor names should be clearly displayed

**Post-condition:**
Classes filtered by selected instructor

---

### Test Case ID: SRCH_007
**Test Case Name:** Duration Filter  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Expand "Duração" filter
2. Select time duration
3. Verify filtered results

**Expected Result:**
- Duration options should be available
- Results should show classes of selected duration
- Time formats should be clearly displayed

**Post-condition:**
Classes filtered by selected duration

---

### Test Case ID: SRCH_008
**Test Case Name:** Music Style Filter  
**Priority:** Low  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Expand "Música" filter
2. Select music style
3. Verify filtered results

**Expected Result:**
- Music style options should be available
- Results should show classes with selected music style
- Music styles should be clearly labeled

**Post-condition:**
Classes filtered by selected music style

---

### Test Case ID: SRCH_009
**Test Case Name:** Filter Persistence  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Filters are selected

**Test Steps:**
1. Apply multiple filters
2. Navigate away from screen
3. Return to search screen
4. Verify filter state

**Expected Result:**
- Selected filters should persist after screen navigation
- Filter selections should be visually indicated
- Results should maintain filtered state

**Post-condition:**
Filter selections maintained after navigation

---

### Test Case ID: SRCH_010
**Test Case Name:** Search Without Filters  
**Priority:** High  
**Precondition:**
- User is logged in
- Search screen is loaded
- No filters selected

**Test Steps:**
1. Click "Ver todas as aulas" without selecting any filters

**Expected Result:**
- All available classes should be displayed
- Results should be in default sort order
- No filter restrictions should be applied

**Post-condition:**
All classes displayed without filters

---

### Test Case ID: SRCH_011
**Test Case Name:** Network Connection Loss  
**Priority:** High  
**Precondition:**
- User is logged in
- Search screen is loaded

**Test Steps:**
1. Disable network connection
2. Attempt to apply filters
3. Click "Ver todas as aulas"

**Expected Result:**
- Appropriate error message displayed
- Previously loaded data handled gracefully
- Option to retry when connection restored

**Post-condition:**
User notified of connection issue
# Test Cases: Evolution/Progress Tracking Screen

## Test Suite: Workout Progress Tracking

### Test Case ID: EVOL_001
**Test Case Name:** Weekly Navigation  
**Priority:** High  
**Precondition:** 
- User is logged in
- User has workout history
- Evolution screen is loaded

**Test Steps:**
1. Click left arrow to view previous week
2. Click right arrow to view next week
3. Verify date range updates
4. Verify statistics update for selected week

**Expected Result:**
- Navigation between weeks should be smooth
- Weekly stats should update accordingly
- Current week should be clearly indicated
- Unavailable future dates should be disabled

**Post-condition:**
Selected week's data is displayed correctly

---

### Test Case ID: EVOL_002
**Test Case Name:** Daily Statistics Display  
**Priority:** High  
**Precondition:**
- User is logged in
- User has completed workouts for the day

**Test Steps:**
1. Select a day with completed workouts
2. Verify total time displayed
3. Verify distance (km) displayed
4. Verify calories burned displayed

**Expected Result:**
- All statistics should be accurate
- Numbers should be properly formatted
- Units should be clearly displayed
- Values should match individual workout totals

**Post-condition:**
Daily statistics accurately reflect workout data

---

### Test Case ID: EVOL_003
**Test Case Name:** Workout Session Details  
**Priority:** High  
**Precondition:**
- User is logged in
- Workout sessions exist for selected day

**Test Steps:**
1. Locate specific workout session
2. Verify session name displayed
3. Verify session duration displayed
4. Verify session time displayed
5. Click session arrow to view details

**Expected Result:**
- Session details should be accurate
- Time format should be correct (HH:MM:SS)
- Session type icon should be displayed
- Navigation to detail view should work

**Post-condition:**
Session details are accessible and accurate

---

### Test Case ID: EVOL_004
**Test Case Name:** Calendar Date Selection  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Calendar icon is visible

**Test Steps:**
1. Click calendar icon
2. Select different date
3. Verify screen updates
4. Verify workout list updates

**Expected Result:**
- Calendar should be easy to navigate
- Selected date should be highlighted
- Screen should update to show selected date's data
- Current date should be clearly marked

**Post-condition:**
Selected date's data is displayed

---

### Test Case ID: EVOL_005
**Test Case Name:** Weekly Summary Calculation  
**Priority:** High  
**Precondition:**
- User is logged in
- Week contains multiple workouts

**Test Steps:**
1. View weekly summary
2. Verify total sessions count
3. Verify total time calculation
4. Verify total distance calculation
5. Verify total calories calculation

**Expected Result:**
- "Esta semana" summary should show correct totals
- All calculations should be accurate
- Numbers should be properly rounded
- Units should be displayed correctly

**Post-condition:**
Weekly summary accurately reflects all workouts

---

### Test Case ID: EVOL_006
**Test Case Name:** Day Status Indicators  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Week view is displayed

**Test Steps:**
1. Verify completed workout indicators
2. Verify current day highlighting
3. Verify future days appearance
4. Verify past days without workouts

**Expected Result:**
- Checkmark should appear for completed workout days
- Current day should be highlighted
- Future days should be appropriately styled
- Past days should show workout status

**Post-condition:**
All day status indicators correctly displayed

---

### Test Case ID: EVOL_007
**Test Case Name:** Session List Scrolling  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Multiple sessions exist for selected day

**Test Steps:**
1. Scroll through session list
2. Verify all sessions are accessible
3. Verify scroll behavior
4. Check session order (chronological)

**Expected Result:**
- Smooth scrolling behavior
- All sessions should be accessible
- Sessions should be in correct order
- No visual glitches during scroll

**Post-condition:**
All sessions are viewable and properly ordered

---

### Test Case ID: EVOL_008
**Test Case Name:** Zero Workout State  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Selected day has no workouts

**Test Steps:**
1. Select day with no workouts
2. Verify empty state display
3. Verify statistics display
4. Check available actions

**Expected Result:**
- Appropriate empty state message displayed
- Statistics should show zeros or be hidden
- UI should handle empty state gracefully
- Options to start new workout should be available

**Post-condition:**
Empty state handled appropriately

---

### Test Case ID: EVOL_009
**Test Case Name:** Network Connection Loss  
**Priority:** High  
**Precondition:**
- User is logged in
- Evolution screen is loaded

**Test Steps:**
1. Disable network connection
2. Attempt to navigate between weeks
3. Attempt to view session details
4. Re-enable network connection

**Expected Result:**
- Cached data should remain visible
- Appropriate error message for new data requests
- Graceful handling of offline state
- Auto-refresh when connection restored

**Post-condition:**
App handles offline state appropriately

---

### Test Case ID: EVOL_010
**Test Case Name:** Data Refresh  
**Priority:** Medium  
**Precondition:**
- User is logged in
- New workout completed in another device

**Test Steps:**
1. Complete workout on different device
2. Wait for sync period or trigger manual refresh
3. Verify data updates
4. Check summary recalculation

**Expected Result:**
- New data should appear automatically or with refresh
- Summary statistics should update
- Session list should update
- Status indicators should update

**Post-condition:**
All data synchronized and updated

---

### Test Case ID: EVOL_011
**Test Case Name:** Session Time Display Format  
**Priority:** Low  
**Precondition:**
- User is logged in
- Sessions exist with various durations

**Test Steps:**
1. View sessions with different durations
2. Check time format consistency
3. Verify AM/PM display
4. Check different time zones if applicable

**Expected Result:**
- Time format should be consistent
- Duration should be in HH:MM:SS format
- Session times should be in local time
- Time zones should be handled correctly

**Post-condition:**
All time displays are correct and consistent
# Test Cases: Profile Screen

## Test Suite: User Profile Management

### Test Case ID: PROF_001
**Test Case Name:** Profile Information Display  
**Priority:** High  
**Precondition:** 
- User is logged in
- Profile screen is loaded

**Test Steps:**
1. Verify user name display
2. Verify email address display
3. Verify birth date display
4. Verify profile picture display
5. Verify greeting message ("Olá! Boa tarde")

**Expected Result:**
- All user information should be correctly displayed
- Date format should be localized
- Greeting should match time of day
- Email should be in valid format
- Profile picture should be properly scaled

**Post-condition:**
All profile information displayed accurately

---

### Test Case ID: PROF_002
**Test Case Name:** Profile Picture Update  
**Priority:** Medium  
**Precondition:**
- User is logged in
- Has camera/gallery permissions

**Test Steps:**
1. Click edit icon on profile picture
2. Select image source (camera/gallery)
3. Select/capture new image
4. Confirm image selection
5. Verify image update

**Expected Result:**
- Image picker should open
- Selected image should be uploaded
- Profile picture should update
- Changes should persist after reload

**Post-condition:**
Profile picture updated successfully

---

### Test Case ID: PROF_003
**Test Case Name:** Initial Settings Access  
**Priority:** High  
**Precondition:**
- User is logged in

**Test Steps:**
1. Click "Ajustes Iniciais"
2. Verify settings screen loads
3. Check all settings options are accessible
4. Verify current settings values displayed

**Expected Result:**
- Settings screen should open
- All options should be clickable
- Current values should be displayed
- Navigation should be smooth

**Post-condition:**
Settings screen accessible and functional

---

### Test Case ID: PROF_004
**Test Case Name:** My Classes Access  
**Priority:** High  
**Precondition:**
- User is logged in

**Test Steps:**
1. Click "Minhas aulas"
2. Verify class list loads
3. Check class details are visible
4. Verify navigation back to profile

**Expected Result:**
- Classes screen should open
- Class information should be visible
- Navigation should work correctly
- List should be scrollable if needed

**Post-condition:**
Classes screen accessible and showing correct data

---

### Test Case ID: PROF_005
**Test Case Name:** App Rating Function  
**Priority:** Medium  
**Precondition:**
- User is logged in
- App installed from official store

**Test Steps:**
1. Click "Avalie o Aplicativo"
2. Verify rating interface appears
3. Submit rating
4. Check confirmation message

**Expected Result:**
- Rating interface should open
- Rating submission should work
- Feedback should be saved
- Appropriate confirmation displayed

**Post-condition:**
Rating submitted successfully

---

### Test Case ID: PROF_006
**Test Case Name:** Help System Access  
**Priority:** High  
**Precondition:**
- User is logged in
- Internet connection available

**Test Steps:**
1. Click "Precisa de ajuda?"
2. Click "Fale conosco"
3. Verify help options displayed
4. Test contact methods

**Expected Result:**
- Help options should be accessible
- Contact methods should work
- Support information should be clear
- Navigation should be intuitive

**Post-condition:**
Help system accessible and functional

---

### Test Case ID: PROF_007
**Test Case Name:** Terms and Privacy Policy  
**Priority:** Medium  
**Precondition:**
- User is logged in

**Test Steps:**
1. Click "Politica de Privacidade"
2. Verify policy content loads
3. Return to profile
4. Click "Termos de uso"
5. Verify terms content loads

**Expected Result:**
- Documents should be readable
- Navigation should work
- Content should be up-to-date
- Links should be functional

**Post-condition:**
Legal documents accessible and readable

---

### Test Case ID: PROF_008
**Test Case Name:** Offline Mode Profile  
**Priority:** High  
**Precondition:**
- User is logged in
- Then disconnect internet

**Test Steps:**
1. Disable network connection
2. Access profile information
3. Attempt to update profile picture
4. Try accessing various sections

**Expected Result:**
- Basic profile info should be visible
- Appropriate offline messages shown
- Cached data should be accessible
- Update functions should be disabled

**Post-condition:**
Profile handles offline state appropriately

---

### Test Case ID: PROF_009
**Test Case Name:** Time-Based Greeting  
**Priority:** Low  
**Precondition:**
- User is logged in

**Test Steps:**
1. Access profile at different times of day
2. Verify greeting changes appropriately
3. Check different time zones
4. Verify language localization

**Expected Result:**
- Greeting should match time of day
- Language should be correct
- Time zone should be respected
- Format should be consistent

**Post-condition:**
Greeting displays correctly for time/locale

---

### Test Case ID: PROF_010
**Test Case Name:** Navigation Bar Function  
**Priority:** High  
**Precondition:**
- User is logged in

**Test Steps:**
1. Click each navigation bar icon
2. Return to profile via nav bar
3. Verify active state indication
4. Check navigation history

**Expected Result:**
- Navigation should be smooth
- Active state should be clear
- History should work correctly
- Icons should be responsive

**Post-condition:**
Navigation functions properly

---

### Test Case ID: PROF_011
**Test Case Name:** Profile Data Validation  
**Priority:** High  
**Precondition:**
- User is logged in
- Profile editing mode accessible

**Test Steps:**
1. Verify email format
2. Check date format
3. Validate name display
4. Verify character limits

**Expected Result:**
- Email should be valid format
- Date should be correctly formatted
- Name should follow rules
- No truncation of important data

**Post-condition:**
All profile data properly validated