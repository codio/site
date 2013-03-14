(function() {
  var DocSearch;

  DocSearch = (function() {

    DocSearch.prototype.minimum_length = 3;

    DocSearch.prototype.stop_words = ["and", "be", "by", "do", "for", "he", "how", "if", "is", "it", "my", "not", "of", "or", "the", "to", "up", "what", "when"];

    DocSearch.prototype.stems = [
      {
        word: "e-mail",
        stem: "email"
      }, {
        word: "javascript",
        stem: "script"
      }, {
        word: "javascript",
        stem: "js"
      }
    ];

    DocSearch.prototype.results = $('#search-content');

    function DocSearch() {
      var _this = this;
      $.ajax({
        url: '/s/js/doc_search/doc_search.json',
        dataType: 'json',
        async: false,
        success: function(json) {
          return _this.pages = json.pages;
        }
      });
      this.init_events();
    }

    DocSearch.prototype.init_events = function() {
      var _this = this;
      $('.docs aside form').on('submit', function() {
        _this.perform_search($('.docs aside form input').val());
        return false;
      });
      return $('#search-content').on('click', 'a', function() {
        return expandTreeWithPath($(this).attr('href'));
      });
    };

    DocSearch.prototype.perform_search = function(term) {
      var breadcrumbs, count, crumb, crumbs, found, item, page, pat, patr, score, terms, text, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1,
        _this = this;
      term = $.trim(term.toLowerCase());
      if (term.length >= this.minimum_length) {
        terms = this.stemming(term);
        count = 0;
        found = [];
        _ref = this.pages;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          page = _ref[_i];
          score = 10000000;
          for (_j = 0, _len1 = terms.length; _j < _len1; _j++) {
            term = terms[_j];
            pat = new RegExp(term, 'i');
            if (page.t.search(pat) !== -1) {
              score -= 2000 - count;
            }
            _ref1 = page.b;
            for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
              crumb = _ref1[_k];
              if (crumb.search(pat) !== -1) {
                score -= 1000 - count;
              }
            }
            patr = new RegExp('(' + term + ')', 'gi');
            text = page.t.replace(patr, "<em>$1</em>");
            crumbs = page.b.join('**').replace(patr, "<em>$1</em>");
          }
          if (score < 10000000) {
            found[count++] = score + '^' + crumbs + '^' + text + '^' + page.u;
          }
        }
        if (count < 1) {
          this.results.html("<li><span>No results found. Please refine your search.</span></li>");
        } else {
          this.results.html('');
          found.sort();
          for (_l = 0, _len3 = found.length; _l < _len3; _l++) {
            item = found[_l];
            item = item.split('^');
            breadcrumbs = item[1].replace(/\*\*/g, ' > ');
            this.results.append("<li><a href='" + item[3] + "'>" + item[2] + "<small>" + breadcrumbs + "</small></a></li>");
          }
        }
      } else {
        this.results.html("<li><span>Should be " + this.minimum_length + " characters or more.</span></li>");
      }
      $(':not(#search-content)').one('click', function() {
        return _this.results.fadeOut();
      });
      return this.results.fadeIn();
    };

    DocSearch.prototype.stemming = function(term) {
      var i, item, terms, _i, _j, _len, _ref, _ref1;
      terms = term.split(' ');
      for (i = _i = 0, _ref = terms.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        _ref1 = this.stems;
        for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
          item = _ref1[_j];
          if (terms[i] === item.word) {
            term = term + ' ' + item.stem;
          }
        }
      }
      return term.split(' ');
    };

    return DocSearch;

  })();

  $(function() {
    return new DocSearch;
  });

}).call(this);
