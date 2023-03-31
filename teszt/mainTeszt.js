QUnit.module("adatok leelenőrzése", function () {
  QUnit.test(
    "létezik-e a masodfokuEgyenletMegoldasa fügvény?",
    function (assert) {
      assert.ok(
        typeof masodfokuEgyenletMegoldasa === "function",
        "a masodfokuEgyenletMegoldasa fügvény"
      );
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1, 4, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 4, 4), { X1: -2, X2: -2 });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, 0, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1, -2, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, -2, 4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, 1, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 1, 4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -1, 2, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-1, 2, 4), {
        X1: -1.2360679774997898,
        X2: 3.23606797749979,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, 1, -4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 1, -4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 12, 1, -4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(12, 1, -4), {
        X1: 0.5371851662270751,
        X2: -0.6205184995604085,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1, 0, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 0, 4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1, 1, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 1, 0), { X1: 0, X2: -1 });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1,4; 1; 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 4, 1, 4), {
        X1: -0.2679491924311228,
        X2: -3.732050807568877,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -1, -1, -4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-1, -1, -4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -2, 3, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-2, 3, 4), {
        X1: -0.8507810593582121,
        X2: 2.350781059358212,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, 0, 4 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 0, 4), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, 1, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 1, 0), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 1, 0, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 0, 0), {
        X1: 0,
        X2: 0,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, -1, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, -1, 0), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -2, -1, 0 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-2, -1, 0), {
        X1: -0.5,
        X2: 0,
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke 0, -1, -2 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, -1, -2), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -2, 0, -2 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-2, 0, -2), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );
  QUnit.test(
    "a másod foku fügvény értéke -0, 2, -2 értékekkel",
    function (assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-0, 2, -2), {
        X1: "nem egy szám",
        X2: "nem egy szám",
      });
    }
  );

  QUnit.test("igaz-e az állítás?", function (assert) {
    assert.false(masodfokuEgyenletMegoldasa(1, 4, 4) < 2);
  });
  QUnit.test("gyökön belüli érték", function (assert) {
    assert.equal(-4 - Math.sqrt(4 * 4 - 4 * 1 * 4), -4);
  });
  QUnit.test("2*a eredmény tesztelése", function (assert) {
    assert.equal(2 * 1, 2);
  });
});
