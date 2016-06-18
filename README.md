Cassandra Data Modeler
=============

This is a fork of [phact](https://github.com/phact)'s [Cassandra Data Modeler](https://github.com/phact/CassandraDataModeler).

The main change is the `bootstrap` branch which uses Bootstrap + AngularJS
and is essentially a complete rewrite of the UI + JavaScript. Some say that
it looks better, but the main reason of the rewrite is cleanliness of code
which makes the script better maintainable.

The current `bootstrap` branch works but does not support all features. There
is an ongoing effort to make it 100% complete. 

The application is written in HTML, CSS, and JavaScript, therefore it is a
static page that can be saved locally and will continue to work. No backend
is required. However, if you want to test the Cassandra Data Modeller, you
can `git clone` it and then run:

```bash
python -m SimpleHTTPServer
```

or, for python 3:

```bash
python -m http.server
```
