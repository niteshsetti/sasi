<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,
            shrink-to-fit=no">
    <title>Majestic Admin</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <!-- plugins:css -->
    <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css">
    <!-- endinject -->
    <!-- plugin css for this page -->
    <link rel="stylesheet" href="vendors/datatables.net-bs4/dataTables.bootstrap4.css">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="css/style.css">
    <!-- endinject -->
    <link rel="shortcut icon" href="images/favicon.png" />

</head>

<body onload="allhide()">
    <div class="container-scroller">
        <!-- partial:../../partials/_navbar.html -->
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="navbar-brand-wrapper d-flex justify-content-center">
                <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                    <a class="navbar-brand brand-logo" href="index.html"><img src="./images/logo.png" alt="logo" /></a>
                    <a class="navbar-brand brand-logo-mini" href="index.html"><img src="./images/logo.png"
                            alt="logo" /></a>
                    <button class="navbar-toggler navbar-toggler align-self-center" type="button"
                        data-toggle="minimize">
                        <span class="mdi mdi-sort-variant"></span>
                    </button>
                </div>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul class="navbar-nav mr-lg-4 w-100">
                    <li class="nav-item nav-search d-none d-lg-block w-100">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="search">
                                    <i class="mdi mdi-magnify"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search now" aria-label="search"
                                aria-describedby="search">
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown me-1">
                        <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                            id="messageDropdown" href="#" data-bs-toggle="dropdown">
                            <i class="mdi mdi-message-text mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                            aria-labelledby="messageDropdown">
                            <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <img src="images/faces/face4.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="item-content flex-grow">
                                    <h6 class="ellipsis font-weight-normal">David Grey
                                    </h6>
                                    <p class="font-weight-light small-text text-muted mb-0">
                                        The meeting is cancelled
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <img src="images/faces/face2.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="item-content flex-grow">
                                    <h6 class="ellipsis font-weight-normal">Tim Cook
                                    </h6>
                                    <p class="font-weight-light small-text text-muted mb-0">
                                        New product launch
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <img src="images/faces/face3.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="item-content flex-grow">
                                    <h6 class="ellipsis font-weight-normal"> Johnson
                                    </h6>
                                    <p class="font-weight-light small-text text-muted mb-0">
                                        Upcoming board meeting
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown me-4">
                        <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
                            id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                            <i class="mdi mdi-bell mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                            aria-labelledby="notificationDropdown">
                            <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <div class="item-icon bg-success">
                                        <i class="mdi mdi-information mx-0"></i>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="font-weight-normal">Application Error</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <div class="item-icon bg-warning">
                                        <i class="mdi mdi-settings mx-0"></i>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="font-weight-normal">Settings</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="item-thumbnail">
                                    <div class="item-icon bg-info">
                                        <i class="mdi mdi-account-box mx-0"></i>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="font-weight-normal">New user registration</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                            <img src="images/faces/face5.jpg" alt="profile" />
                            <span class="nav-profile-name">Louis Barnett</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                            aria-labelledby="profileDropdown">
                            <a class="dropdown-item">
                                <i class="mdi mdi-settings text-primary"></i>
                                Settings
                            </a>
                            <a class="dropdown-item">
                                <i class="mdi mdi-logout text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="offcanvas">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="mdi mdi-home menu-icon"></i>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="inviteemp.html">
                            <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                            <span class="menu-title">Invite Employees</span>
                        </a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false"
                            aria-controls="ui-basic">
                            <i class="mdi mdi-view-headline menu-icon"></i>
                            <span class="menu-title">Forms</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="ui-basic">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Form
                                        A</a></li>
                                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Form
                                        B</a></li>
                            </ul>
                        </div>
                    </li> -->


                    <li class="nav-item">
                        <a class="nav-link" href="emplist.html">
                            <i class="mdi mdi-grid-large menu-icon"></i>
                            <span class="menu-title">Employees List</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="appraisai.html">
                            <i class="mdi mdi-account menu-icon"></i>
                            <span class="menu-title">APPRAISAL</span>
                        </a>
                    </li>

                </ul>
            </nav>

            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">

                        <!--<div class="col-12 grid-margin stretch-card">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Basic form elements</h4>
                          <p class="card-description">
                            Basic form elements
                          </p>
                          <form class="forms-sample">
                            <div class="form-group">
                              <label for="exampleInputName1">Name</label>
                              <input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail3">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword4">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
                            </div>
                            <div class="form-group">
                              <label for="exampleSelectGender">Gender</label>
                              <select class="form-control" id="exampleSelectGender">
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label>File upload</label>
                              <input type="file" name="img[]" class="file-upload-default">
                              <div class="input-group col-xs-12">
                                <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
                                <span class="input-group-append">
                                  <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                                </span>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputCity1">City</label>
                              <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location">
                            </div>
                            <div class="form-group">
                              <label for="exampleTextarea1">Textarea</label>
                              <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary me-2">Submit</button>
                            <button class="btn btn-light">Cancel</button>
                          </form>
                        </div>
                      </div>
                    </div>-->
                        <div class="col-12 grid-margin">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">General Faculty information</h4>
                                    <form class="form-sample">
                                        <p class="card-description">
                                            Personal info
                                        </p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Name of Faculty</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Designation</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Department</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control form-control-lg">
                                                            <option selected hidden value="">Select Your Department
                                                            </option>
                                                            <option>EEE</option>
                                                            <option>CSE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Date of Birth</label>
                                                    <div class="col-sm-9">
                                                        <input class="form-control" placeholder="dd/mm/yyyy"
                                                            type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Date of Joining in
                                                        SITE</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Area of
                                                        Specialization</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control form-control-lg">
                                                            <option>Computer Science and Engineering</option>
                                                            <option>Electronic Communication Engineering</option>
                                                            <option>Iinformation Technology</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Phone Number</label>
                                                        <div class="col-sm-9">
                                                            <select class="form-control form-control-lg">
                                                                <option selected hidden value="">Select Your Year
                                                                </option>
                                                                <option>III-I</option>
                                                                <option>III-II</option>
                                                                <option>IV-I</option>
                                                                <option>IV-II</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Email ID</label>
                                                        <div class="col-sm-9">
                                                            <select class="form-control form-control-lg">
                                                                <option selected hidden value="">Select Your Section
                                                                </option>
                                                                <option>A</option>
                                                                <option>B</option>
                                                                <option>C</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <p class="card-description">
                                                Qualification
                                            <p style="Text-align:right; color: white; margin-top: -1cm;"><a
                                                    class="btn btn-success" id="qshow">Add</a>
                                            </p>
                                            </p>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Diploma/Degree</th>
                                                        <th scope="col">University</th>
                                                        <th scope="col">College</th>
                                                        <th scope="col">State</th>
                                                        <th scope="col">Class</th>
                                                        <th scope="col">Year Of Passing</th>


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="7">
                                                            <center><b>No Data Found</b></center>
                                                            <hr>
                                                        </td>
                                                    </tr>
                                                    <!-- <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                    
                                                      </tr> -->

                                                </tbody>
                                            </table>
                                            <br>
                                            <div id="qdiv">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 1</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">State</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 2</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Postcode</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">City</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Country</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control form-control-lg">
                                                                    <option>America</option>
                                                                    <option>Italy</option>
                                                                    <option>Russia</option>
                                                                    <option>Britain</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <p class="card-description">
                                                Rank/Prizes/Medals won at College / University during education/in
                                                service
                                            <p style="Text-align:right; color: white; margin-top: -1cm;"><a
                                                    class="btn btn-success" id="rshow">Add</a></p>
                                            </p>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Diploma/Degree</th>
                                                        <th scope="col">University</th>
                                                        <th scope="col">College</th>
                                                        <th scope="col">State</th>
                                                        <th scope="col">Class</th>
                                                        <th scope="col">Year Of Passing</th>


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="7">
                                                            <center><b>No Data Found</b></center>
                                                            <hr>
                                                        </td>
                                                    </tr>
                                                    <!-- <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                
                                                  </tr> -->

                                                </tbody>
                                            </table>
                                            <div id="rdiv">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 1</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">State</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 2</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Postcode</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">City</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Country</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control form-control-lg">
                                                                    <option>America</option>
                                                                    <option>Italy</option>
                                                                    <option>Russia</option>
                                                                    <option>Britain</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <p class="card-description">Additional Training
                                            <p style="Text-align:right; color: white; margin-top: -1cm;"><a
                                                    class="btn btn-success" id="ashow">Add</a></p>
                                            </p>
                                            <table class="table">

                                                <tr>
                                                    <th scope="col" rowspan="2">#</th>
                                                    <th scope="col" colspan="2">
                                                        <center>Period</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Total Period of Training in Weeks</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Nature of Program</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Institution</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Remarks</center>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>From</td>
                                                    <td>To</td>
                                                </tr>

                                                <tr>
                                                    <td colspan="7">
                                                        <center><b>No Data Found</b></center>
                                                        <hr>
                                                    </td>
                                                </tr>
                                                <!-- <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                
                                                  </tr> -->


                                            </table>
                                            <div id="adiv">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 1</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">State</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Address 2</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Postcode</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">City</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Country</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control form-control-lg">
                                                                    <option>America</option>
                                                                    <option>Italy</option>
                                                                    <option>Russia</option>
                                                                    <option>Britain</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <p class="card-description">Total Experience
                                            <p style="Text-align:right; color: white; margin-top: -1cm;"><a
                                                    class="btn btn-success" id="tshow">Add</a></p>
                                            </p>

                                            <table class="table">

                                                <tr>
                                                    <th scope="col" rowspan="2">#</th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Position Held</center>
                                                    </th>
                                                    <th scope="col" colspan="2">
                                                        <center>Status</center>
                                                    </th>
                                                    <th scope="col" colspan="2">
                                                        <center>Duration</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>No of Year(Fraction Allowed)</center>
                                                    </th>
                                                    <th scope="col" rowspan="2">
                                                        <center>Name of Organization</center>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>Permanent</td>
                                                    <td>Temporary</td>
                                                    <td>From</td>
                                                    <td>To</td>

                                                </tr>

                                                <tr>
                                                    <td colspan="8">
                                                        <center><b>No Data Found</b></center>
                                                        <hr>
                                                    </td>
                                                </tr>
                                                <!-- <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                    
                                                      </tr> -->


                                            </table>
                                            <div id="tdiv">
                                                <div id="adiv">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Address 1</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">State</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Address 2</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Postcode</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">City</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Country</label>
                                                                <div class="col-sm-9">
                                                                    <select class="form-control form-control-lg">
                                                                        <option>America</option>
                                                                        <option>Italy</option>
                                                                        <option>Russia</option>
                                                                        <option>Britain</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <p class="card-description">
                                                Instructions
                                            <p style="Text-align:right; color: white; margin-top: -1cm;"><a
                                                    class="btn btn-success" id="ishow">Show</a></p>
                                            </p>
                                            <div id="idiv">
                                                <label>The appraisal form consists of the following Components, Maximum
                                                    macros for each of the
                                                    components and the scaling carried</label>
                                                <table class="table">

                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">
                                                            <center>Category</center>
                                                        </th>
                                                        <th scope="col">
                                                            <center>Maximum Marks</center>
                                                        </th>

                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td style="text-align:center">Teaching-Learning And Evaluation
                                                        </td>
                                                        <td>300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td style="text-align:center">Research and Allied Contributions
                                                        </td>
                                                        <td>150</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td style="text-align:center">Administration</td>
                                                        <td>150</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td style="text-align:center">Extension Activities</td>
                                                        <td>150</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: right;" align="right" colspan="2">Total
                                                        </td>
                                                        <td>750</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: right; font-weight: bold;" align="right"
                                                            colspan="2">Additional Points as
                                                            per Choice</td>
                                                        <td>250</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: right;" align="right" colspan="2">Grand
                                                            Total Points</td>
                                                        <td>1000</td>
                                                    </tr>
                                                </table>
                                                <div style="text-align: left;">
                                                    <ol>
                                                        <li>The total score considering items number 1 to 4 is for 750
                                                            marks, as shown in the above table. Additionally, a faculty
                                                            can gain additional 250 marks for any one category between
                                                            S.No 2 to 4 in the above table as per their area of Interest
                                                            and Expertise.<br><br></li>
                                                        <li>In Category-I (300 Marks), The maximum score from S.No-1 to
                                                            S.No-13 is 270 Marks and S.No-14 HOD Assessment is Mandatory
                                                            for 30Marks.<br><br></li>
                                                        <li>Suppose a faculty wants 250 additional marks added to the
                                                            RESEARCH AND ALLIED CONTRIBUTIONS Category (i.e. S.No 2),
                                                            then the scoring composition would be (300 + 400 + 150 +
                                                            150= 1000) or if any faculty wants 250 additional marks
                                                            added to the EXTENSION ACTIVITIES Category (i.e. S.No 4),
                                                            then the scoring composition would be (300 + 150 + 150 + 400
                                                            = 1000)<br><br> </li>
                                                        <li>The period considered for Category 1 (S.No.1) - 1st July
                                                            2020 to 30th June 2021<br><br></li>
                                                        <li>The period considered for Category 2 (S.No.2) - 1st Jan 2020
                                                            to 31st Dec 2020<br><br></li>
                                                        <li>The period considered for Category 3 (S.No.3) - 1st July
                                                            2020 to 30th June 2021<br><br></li>
                                                        <li>The period considered for Category 4 (S.No.4) - 1st July
                                                            2020 to 30th June 2021<br><br></li>
                                                        <li>Faculty has to submit all the proofs for all the points
                                                            claimed duly approved by the HOD concerned.</li>
                                                    </ol>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:../../partials/_footer.html -->
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a
                                href="" target="_blank">Project Expo.com </a>2022</span>
                    </div>
                </footer>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <script>
        $(document).ready(function () {

            $("#qshow").click(function () {
                $("#qdiv").toggle();
            });
            $("#rshow").click(function () {
                $("#rdiv").toggle();
            });
            $("#ashow").click(function () {
                $("#adiv").toggle();
            }); $("#tshow").click(function () {
                $("#tdiv").toggle();
            });
            $("#ishow").click(function () {
                $("#idiv").toggle();
            });
        });
    </script>
    <script>
        function allhide() {


            document.getElementById('qdiv').style.display = "none";
            document.getElementById('rdiv').style.display = "none";
            document.getElementById('adiv').style.display = "none";
            document.getElementById('tdiv').style.display = "none";
            document.getElementById('idiv').style.display = "none";
        }
    </script>
</body>

</html>