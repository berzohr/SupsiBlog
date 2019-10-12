package ch.supsi.webapp.web.services;

import ch.supsi.webapp.web.model.BlogPost;
import ch.supsi.webapp.web.model.Quote;
import ch.supsi.webapp.web.repository.BlogPostRepository;
import ch.supsi.webapp.web.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuoteService {
    @Autowired
    private QuoteRepository quoteRepository;

    public List<Quote> get(){
        List<Quote> quotes = new ArrayList<>();
        quoteRepository.findAll().iterator().forEachRemaining(quotes::add);
        Collections.sort(quotes, (o1, o2) -> {
            Long date1 = new Long(o1.getDate().getTime());
            Long date2 = new Long(o2.getDate().getTime());
            return date2.compareTo(date1);
        });
        return quotes;
    }

    public Optional<Quote> getById(int id){
        return quoteRepository.findById(id);
    }

    public void post(Quote quote){
        quoteRepository.save(quote);
    }

    public void remove(int id){
        quoteRepository.deleteById(id);
    }

    public void put(int id, Quote quote){
        quote.setId(id);
        quoteRepository.save(quote);
    }

    public boolean exist(int id){
        return quoteRepository.existsById(id);
    }
}
