<template>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/index.css">

	<div class="container-md mt-3">
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <h1>登入</h1>
            </div>
            <div class="col-8">
                <form class="row g-3 needs-validation" action="/login" method="POST">
                    <div>
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" name="email">
                    </div>

                    <div>
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" name="password">
                    </div>

                    <div>
                      <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
</template>

<style>

</style>